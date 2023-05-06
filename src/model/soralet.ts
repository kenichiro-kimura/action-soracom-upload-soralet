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

export class Soralet {
    'createdTime'?: number;
    'description'?: string;
    'operatorId'?: string;
    'soraletId'?: string;
    'updatedTime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "operatorId",
            "baseName": "operatorId",
            "type": "string"
        },
        {
            "name": "soraletId",
            "baseName": "soraletId",
            "type": "string"
        },
        {
            "name": "updatedTime",
            "baseName": "updatedTime",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Soralet.attributeTypeMap;
    }
}
