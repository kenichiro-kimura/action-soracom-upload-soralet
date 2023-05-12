import * as fs from "fs";
import * as core from "@actions/core";
import * as soracom from "./soracom";
import { SoracomApiResult } from "./soracomApiResult";
import { SoracomOrbitConfiguration } from "./soracomOrbitConfiguration";

async function getSoraletInUse(groupApi: soracom.API.GroupApi):Promise<{ [key: string]: number; }> {
    const inUseSoraletSrns: { [key: string]: number; } = {};

    const groups: soracom.Model.Group[] = (
        await groupApi.listGroups(undefined, undefined, undefined, 10000)
    ).body;

    groups.forEach((group) => {
        if (group.configuration && group.configuration.SoracomOrbit) {
            const soracomOrbit: unknown = group.configuration.SoracomOrbit;
            const soracomOrbitConfiguration: SoracomOrbitConfiguration = (
                soracomOrbit as SoracomOrbitConfiguration
            );
            inUseSoraletSrns[soracomOrbitConfiguration.codeSrn] = 1;
        }
    });

    return inUseSoraletSrns;
}

async function getSoraletVersionToDelete(
    groupApi: soracom.API.GroupApi,
    soraletApi: soracom.API.SoraletApi,
    soraletId: string,
): Promise<number> {
    const inUseSoraletSrns: { [key: string]: number; } = (
        await getSoraletInUse(groupApi)
    );

    const soraletVersions: soracom.Model.SoraletVersion[] = (await soraletApi.listSoraletVersions(soraletId, "asc", 10)).body;
    let versionToDelete: number = -1;
    for (const soraletVersion of soraletVersions) {
        if (!(soraletVersion.srn && inUseSoraletSrns[soraletVersion.srn] === 1)
            && soraletVersion.version) {
            versionToDelete = soraletVersion.version;
            break;
        }
    }
    return versionToDelete;
}

async function main() {
    const authApi = new soracom.API.AuthApi();
    const soraletApi = new soracom.API.SoraletApi();
    const groupApi = new soracom.API.GroupApi();
    const authRequest = new soracom.Model.AuthRequest();
    authRequest.authKey = core.getInput("soracom_auth_key", { required: true });
    authRequest.authKeyId = core.getInput("soracom_auth_key_id", { required: true });
    const soraletId: string = core.getInput("soracom_soralet_id", { required: true });
    const soraletFilename: string = core.getInput("soracom_soralet_filename", { required: true });
    const coverage: string = core.getInput("soracom_coverage", { required: false }) ? core.getInput("soracom_coverage", { required: false }) : "jp";
    const endpoint: string = coverage === "g" ? "https://g.api.soracom.io/v1" : "https://api.soracom.io/v1";
    const deleteOldSoralet: boolean = core.getInput("soracom_delete_old_soralet", { required: false }) === "true";

    authApi.basePath = endpoint;
    soraletApi.basePath = endpoint;
    groupApi.basePath = endpoint;

    try {
        const authResult = await authApi.auth(authRequest);
        const apiKey = authResult.body.apiKey ? authResult.body.apiKey : "";
        const apiToken = authResult.body.token ? authResult.body.token : "";

        authApi.setApiKey(soracom.API.AuthApiApiKeys.api_key, apiKey);
        authApi.setApiKey(soracom.API.AuthApiApiKeys.api_token, apiToken);

        soraletApi.setApiKey(soracom.API.SoraletApiApiKeys.api_key, apiKey);
        soraletApi.setApiKey(soracom.API.SoraletApiApiKeys.api_token, apiToken);

        groupApi.setApiKey(soracom.API.GroupApiApiKeys.api_key, apiKey);
        groupApi.setApiKey(soracom.API.GroupApiApiKeys.api_token, apiToken);

        try {
            await soraletApi.getSoralet(soraletId);
        } catch (error) {
            const createSoraletRequest = new soracom.Model.CreateSoraletRequest();
            createSoraletRequest.soraletId = soraletId;
            await soraletApi.createSoralet(createSoraletRequest);
        }

        try {
            const requestFile : soracom.API.RequestFile = fs.createReadStream(soraletFilename);
            const uploadResult = await soraletApi.uploadSoraletCode(soraletId, requestFile, "application/octet-stream");
            core.setOutput("result", uploadResult.body);
        } catch (error) {
            if (error instanceof soracom.API.HttpError && deleteOldSoralet) {
                const errorMessage: SoracomApiResult = (
                    JSON.parse(error.body as string) as SoracomApiResult
                );

                if (errorMessage.code !== "SLM1010") {
                    throw error;
                }

                const versionToDelete: number = (
                    await getSoraletVersionToDelete(groupApi, soraletApi, soraletId)
                );

                if (versionToDelete > 0) {
                    await soraletApi.deleteSoraletVersion(soraletId, versionToDelete);
                    const requestFile : soracom.API.RequestFile = (
                        fs.createReadStream(soraletFilename)
                    );
                    const uploadResult = await soraletApi.uploadSoraletCode(soraletId, requestFile, "application/octet-stream");
                    core.setOutput("result", uploadResult.body);
                } else {
                    throw error;
                }
            } else {
                // throw original error if it is not SLIM1010 error
                throw error;
            }
        }
    } catch (error) {
        try {
            await authApi.logout();
        } catch (e) {
            console.error(e);
        }
        let errorMessage: string = "";
        if (typeof error === "string") {
            errorMessage = error;
        } else if (error instanceof soracom.API.HttpError) {
            errorMessage = JSON.stringify(error.body);
        } else if (error instanceof Error) {
            errorMessage = JSON.stringify(error.message);
        }
        core.setFailed(errorMessage);
    }
}

main().catch((error) => {
    let errorMessage: string = "";
    if (typeof error === "string") {
        errorMessage = error;
    } else if (error instanceof soracom.API.HttpError) {
        errorMessage = JSON.stringify(error.body);
    } else if (error instanceof Error) {
        errorMessage = JSON.stringify(error.message);
    }
    core.setFailed(errorMessage);
});
