/**
 * SORACOM API
 * SORACOM API v1
 *
 * The version of the OpenAPI document: 20230427-035008
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { DeviceObjectModel } from '../model/deviceObjectModel';
import { SetDeviceObjectModelScopeRequest } from '../model/setDeviceObjectModelScopeRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.soracom.io/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DeviceObjectModelApiApiKeys {
    api_key,
    api_token,
}

export class DeviceObjectModelApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'api_key': new ApiKeyAuth('header', 'X-Soracom-API-Key'),
        'api_token': new ApiKeyAuth('header', 'X-Soracom-Token'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: DeviceObjectModelApiApiKeys, value: string) {
        (this.authentications as any)[DeviceObjectModelApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 新しいデバイスオブジェクトモデルを作成します。
     * @summary 新しいデバイスオブジェクトモデルを作成する
     * @param deviceObjectModel Device object model definition in either XML or JSON format.
     */
    public async createDeviceObjectModel (deviceObjectModel: DeviceObjectModel, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeviceObjectModel;  }> {
        const localVarPath = this.basePath + '/device_object_models';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'deviceObjectModel' is not null or undefined
        if (deviceObjectModel === null || deviceObjectModel === undefined) {
            throw new Error('Required parameter deviceObjectModel was null or undefined when calling createDeviceObjectModel.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(deviceObjectModel, "DeviceObjectModel")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.api_token.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_token.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeviceObjectModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DeviceObjectModel");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 対象のデバイスオブジェクトモデルを削除します。
     * @summary 対象のデバイスオブジェクトモデルを削除する
     * @param modelId 対象のデバイスオブジェクトモデルの ID
     */
    public async deleteDeviceObjectModel (modelId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/device_object_models/{model_id}'
            .replace('{' + 'model_id' + '}', encodeURIComponent(String(modelId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'modelId' is not null or undefined
        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling deleteDeviceObjectModel.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.api_token.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_token.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * デバイスオブジェクトモデルを取得します。
     * @summary デバイスオブジェクトモデルを取得する
     * @param modelId 対象のデバイスオブジェクトモデルの ID
     */
    public async getDeviceObjectModel (modelId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeviceObjectModel;  }> {
        const localVarPath = this.basePath + '/device_object_models/{model_id}'
            .replace('{' + 'model_id' + '}', encodeURIComponent(String(modelId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'modelId' is not null or undefined
        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling getDeviceObjectModel.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.api_token.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_token.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeviceObjectModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DeviceObjectModel");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * デバイスオブジェクトモデルのリストを返します。
     * @summary デバイスオブジェクトモデルのリストを返す
     * @param lastEvaluatedKey 現ページで取得した最後のデバイスオブジェクトモデルの ID。このパラメータを指定することで次のデバイスオブジェクトモデル以降のリストを取得できる。
     * @param limit 取得する結果の上限数
     */
    public async listDeviceObjectModels (lastEvaluatedKey?: string, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<DeviceObjectModel>;  }> {
        const localVarPath = this.basePath + '/device_object_models';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (lastEvaluatedKey !== undefined) {
            localVarQueryParameters['last_evaluated_key'] = ObjectSerializer.serialize(lastEvaluatedKey, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.api_token.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_token.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Array<DeviceObjectModel>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<DeviceObjectModel>");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 対象のデバイスオブジェクトモデルが適用される Scope をセットします。
     * @summary 対象のデバイスオブジェクトモデルが適用される Scope をセットする
     * @param modelId 対象のデバイスオブジェクトモデルの ID
     * @param setDeviceObjectModelScopeRequest 対象のデバイスオブジェクトモデルにセットする Scope の値
     */
    public async setDeviceObjectModelScope (modelId: string, setDeviceObjectModelScopeRequest: SetDeviceObjectModelScopeRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeviceObjectModel;  }> {
        const localVarPath = this.basePath + '/device_object_models/{model_id}/set_scope'
            .replace('{' + 'model_id' + '}', encodeURIComponent(String(modelId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'modelId' is not null or undefined
        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling setDeviceObjectModelScope.');
        }

        // verify required parameter 'setDeviceObjectModelScopeRequest' is not null or undefined
        if (setDeviceObjectModelScopeRequest === null || setDeviceObjectModelScopeRequest === undefined) {
            throw new Error('Required parameter setDeviceObjectModelScopeRequest was null or undefined when calling setDeviceObjectModelScope.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(setDeviceObjectModelScopeRequest, "SetDeviceObjectModelScopeRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.api_token.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_token.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeviceObjectModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DeviceObjectModel");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * デバイスオブジェクトモデルを更新します。
     * @summary デバイスオブジェクトモデルを更新する
     * @param modelId 対象のデバイスオブジェクトモデルの ID
     * @param deviceObjectModel XML か JSON により表現されたデバイスオブジェクトモデルの表記。
     */
    public async updateDeviceObjectModel (modelId: string, deviceObjectModel: DeviceObjectModel, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeviceObjectModel;  }> {
        const localVarPath = this.basePath + '/device_object_models/{model_id}'
            .replace('{' + 'model_id' + '}', encodeURIComponent(String(modelId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'modelId' is not null or undefined
        if (modelId === null || modelId === undefined) {
            throw new Error('Required parameter modelId was null or undefined when calling updateDeviceObjectModel.');
        }

        // verify required parameter 'deviceObjectModel' is not null or undefined
        if (deviceObjectModel === null || deviceObjectModel === undefined) {
            throw new Error('Required parameter deviceObjectModel was null or undefined when calling updateDeviceObjectModel.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(deviceObjectModel, "DeviceObjectModel")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.api_key.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_key.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.api_token.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.api_token.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeviceObjectModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DeviceObjectModel");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
