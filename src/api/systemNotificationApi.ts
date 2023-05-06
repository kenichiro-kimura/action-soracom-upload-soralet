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
import { SetSystemNotificationsRequest } from '../model/setSystemNotificationsRequest';
import { SystemNotificationsModel } from '../model/systemNotificationsModel';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.soracom.io/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum SystemNotificationApiApiKeys {
    api_key,
    api_token,
}

export class SystemNotificationApi {
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

    public setApiKey(key: SystemNotificationApiApiKeys, value: string) {
        (this.authentications as any)[SystemNotificationApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * メールアドレス設定からメールアドレスを削除する。
     * @summary メールアドレス設定からメールアドレスを削除する
     * @param operatorId オペレーター ID
     * @param type system notification type
     */
    public async deleteSystemNotification (operatorId: string, type: 'recovery' | 'billing' | 'support', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/operators/{operator_id}/system_notifications/{type}'
            .replace('{' + 'operator_id' + '}', encodeURIComponent(String(operatorId)))
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'operatorId' is not null or undefined
        if (operatorId === null || operatorId === undefined) {
            throw new Error('Required parameter operatorId was null or undefined when calling deleteSystemNotification.');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling deleteSystemNotification.');
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
     * メールアドレス設定を返す。
     * @summary メールアドレス設定の情報を取得する
     * @param operatorId オペレーター ID
     * @param type system notification type
     */
    public async getSystemNotification (operatorId: string, type: 'primary' | 'recovery' | 'billing' | 'support', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SystemNotificationsModel;  }> {
        const localVarPath = this.basePath + '/operators/{operator_id}/system_notifications/{type}'
            .replace('{' + 'operator_id' + '}', encodeURIComponent(String(operatorId)))
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)));
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

        // verify required parameter 'operatorId' is not null or undefined
        if (operatorId === null || operatorId === undefined) {
            throw new Error('Required parameter operatorId was null or undefined when calling getSystemNotification.');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling getSystemNotification.');
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
            return new Promise<{ response: http.IncomingMessage; body: SystemNotificationsModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SystemNotificationsModel");
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
     * メールアドレス設定の一覧を返す。
     * @summary メールアドレス設定の一覧を取得する
     * @param operatorId オペレーター ID
     */
    public async listSystemNotifications (operatorId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<SystemNotificationsModel>;  }> {
        const localVarPath = this.basePath + '/operators/{operator_id}/system_notifications'
            .replace('{' + 'operator_id' + '}', encodeURIComponent(String(operatorId)));
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

        // verify required parameter 'operatorId' is not null or undefined
        if (operatorId === null || operatorId === undefined) {
            throw new Error('Required parameter operatorId was null or undefined when calling listSystemNotifications.');
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
            return new Promise<{ response: http.IncomingMessage; body: Array<SystemNotificationsModel>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Array<SystemNotificationsModel>");
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
     * メールアドレス設定にメールアドレスを設定する。
     * @summary メールアドレス設定にメールアドレスを設定する
     * @param operatorId オペレーター ID
     * @param type system notification type
     * @param setSystemNotificationsRequest request
     */
    public async setSystemNotification (operatorId: string, type: 'primary' | 'recovery' | 'billing' | 'support', setSystemNotificationsRequest: SetSystemNotificationsRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SystemNotificationsModel;  }> {
        const localVarPath = this.basePath + '/operators/{operator_id}/system_notifications/{type}'
            .replace('{' + 'operator_id' + '}', encodeURIComponent(String(operatorId)))
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)));
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

        // verify required parameter 'operatorId' is not null or undefined
        if (operatorId === null || operatorId === undefined) {
            throw new Error('Required parameter operatorId was null or undefined when calling setSystemNotification.');
        }

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling setSystemNotification.');
        }

        // verify required parameter 'setSystemNotificationsRequest' is not null or undefined
        if (setSystemNotificationsRequest === null || setSystemNotificationsRequest === undefined) {
            throw new Error('Required parameter setSystemNotificationsRequest was null or undefined when calling setSystemNotification.');
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
            body: ObjectSerializer.serialize(setSystemNotificationsRequest, "SetSystemNotificationsRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: SystemNotificationsModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SystemNotificationsModel");
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
