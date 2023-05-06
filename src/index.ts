import * as soracom from "./soracom";
import * as fs from 'fs';
import * as core from '@actions/core';

/*
const myInput = core.getInput('inputName', { required: true });
const myBooleanInput = core.getBooleanInput('booleanInputName', { required: true });
const myMultilineInput = core.getMultilineInput('multilineInputName', { required: true });
core.setOutput('outputKey', 'outputVal');
*/

async function main(){
    const authApi = new soracom.AuthApi();
    const authRequest = new soracom.AuthRequest();
    authRequest.authKey = core.getInput('soracom_auth_key', { required: true}); // 
    authRequest.authKeyId = core.getInput('soracom_auth_key_id', { required: true}); 
    const soraletId: string = core.getInput('soracom_soralet_id', { required: true});
    const soraletFilename: string = core.getInput('soracom_soralet_filename', { required: true});

    try {
        const authResult = await authApi.auth(authRequest);
        const apiKey: string = authResult.body.apiKey ? authResult.body.apiKey : "";
        const apiToken: string = authResult.body.token ? authResult.body.token : "";
    
        const soraletApi = new soracom.SoraletApi();

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
