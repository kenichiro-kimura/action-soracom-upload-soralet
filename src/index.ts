import * as soracom from "./soracom";
import * as fs from 'fs';
import * as core from '@actions/core';

async function main(){
    const authApi = new soracom.AuthApi();
    const soraletApi = new soracom.SoraletApi();
    const authRequest = new soracom.AuthRequest();
    authRequest.authKey = core.getInput('soracom_auth_key', { required: true}); 
    authRequest.authKeyId = core.getInput('soracom_auth_key_id', { required: true}); 
    const soraletId: string = core.getInput('soracom_soralet_id', { required: true});
    const soraletFilename: string = core.getInput('soracom_soralet_filename', { required: true});
    const coverage: string = core.getInput('soracom_coverage', { required: false}) ? core.getInput('soracom_coverage', { required: false}) : "jp";
    const endpoint: string = coverage === "g" ? "https://g.api.soracom.io/v1" : "https://api.soracom.io/v1";

    authApi.basePath = soraletApi.basePath = endpoint;

    try {
        const authResult = await authApi.auth(authRequest);
        const apiKey = authResult.body.apiKey ? authResult.body.apiKey : "";
        const apiToken = authResult.body.token ? authResult.body.token : "";
    
        authApi.setApiKey(soracom.AuthApiApiKeys.api_key, apiKey);
        authApi.setApiKey(soracom.AuthApiApiKeys.api_token,apiToken);

        soraletApi.setApiKey(soracom.SoraletApiApiKeys.api_key, apiKey);
        soraletApi.setApiKey(soracom.SoraletApiApiKeys.api_token,apiToken);

        try {
            await soraletApi.getSoralet(soraletId);
        } catch (error) {
            const createSoraletRequest = new soracom.CreateSoraletRequest();
            createSoraletRequest.soraletId = soraletId;
            const createSoraletResult = await soraletApi.createSoralet(createSoraletRequest);
        }
        const requestFile : soracom.RequestFile = fs.createReadStream(soraletFilename);
        const uploadResult = await soraletApi.uploadSoraletCode(soraletId,requestFile,"application/octet-stream");
        console.log(uploadResult.body);
        core.setOutput("result",uploadResult.body);
    } catch(error) {
        try {
            const logoutResult = await authApi.logout();
        } catch (e) {
            console.error(e);
        }
        let errorMessage: string = "";
        if (typeof error === "string") {
            errorMessage = error;
        } else if (error instanceof soracom.HttpError) {
            errorMessage = JSON.stringify(error.body);
        } else if (error instanceof Error) {
            errorMessage = JSON.stringify(error.message);
        }
        core.setFailed(errorMessage);
    }
}

main();
