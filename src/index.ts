import * as fs from "fs";
import * as core from "@actions/core";
import * as soracom from "./soracom";

async function main() {
    const authApi = new soracom.API.AuthApi();
    const soraletApi = new soracom.API.SoraletApi();
    const authRequest = new soracom.Model.AuthRequest();
    authRequest.authKey = core.getInput("soracom_auth_key", { required: true });
    authRequest.authKeyId = core.getInput("soracom_auth_key_id", { required: true });
    const soraletId: string = core.getInput("soracom_soralet_id", { required: true });
    const soraletFilename: string = core.getInput("soracom_soralet_filename", { required: true });
    const coverage: string = core.getInput("soracom_coverage", { required: false }) ? core.getInput("soracom_coverage", { required: false }) : "jp";
    const endpoint: string = coverage === "g" ? "https://g.api.soracom.io/v1" : "https://api.soracom.io/v1";

    authApi.basePath = endpoint;
    soraletApi.basePath = endpoint;

    try {
        const authResult = await authApi.auth(authRequest);
        const apiKey = authResult.body.apiKey ? authResult.body.apiKey : "";
        const apiToken = authResult.body.token ? authResult.body.token : "";

        authApi.setApiKey(soracom.API.AuthApiApiKeys.api_key, apiKey);
        authApi.setApiKey(soracom.API.AuthApiApiKeys.api_token, apiToken);

        soraletApi.setApiKey(soracom.API.SoraletApiApiKeys.api_key, apiKey);
        soraletApi.setApiKey(soracom.API.SoraletApiApiKeys.api_token, apiToken);

        try {
            await soraletApi.getSoralet(soraletId);
        } catch (error) {
            const createSoraletRequest = new soracom.Model.CreateSoraletRequest();
            createSoraletRequest.soraletId = soraletId;
            await soraletApi.createSoralet(createSoraletRequest);
        }
        const requestFile : soracom.API.RequestFile = fs.createReadStream(soraletFilename);
        const uploadResult = await soraletApi.uploadSoraletCode(soraletId, requestFile, "application/octet-stream");
        console.log(uploadResult.body);
        core.setOutput("result", uploadResult.body);
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
