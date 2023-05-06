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

import { RequestFile } from './models';

export class LagoonUserCreationRequest {
    /**
    * A role that represents the permission.
    */
    'role'?: LagoonUserCreationRequest.RoleEnum;
    'userEmail'?: string;
    'userPassword'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "role",
            "baseName": "role",
            "type": "LagoonUserCreationRequest.RoleEnum"
        },
        {
            "name": "userEmail",
            "baseName": "userEmail",
            "type": "string"
        },
        {
            "name": "userPassword",
            "baseName": "userPassword",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LagoonUserCreationRequest.attributeTypeMap;
    }
}

export namespace LagoonUserCreationRequest {
    export enum RoleEnum {
        Viewer = <any> 'Viewer',
        Editor = <any> 'Editor'
    }
}
