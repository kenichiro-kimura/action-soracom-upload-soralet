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

export class LoraNetworkSet {
    'allowedOperators'?: Set<string>;
    'createdTime'?: Date;
    'lastModifiedTime'?: Date;
    'networkSetId'?: string;
    'operatorId'?: string;
    'tags'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowedOperators",
            "baseName": "allowedOperators",
            "type": "Set<string>"
        },
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "Date"
        },
        {
            "name": "lastModifiedTime",
            "baseName": "lastModifiedTime",
            "type": "Date"
        },
        {
            "name": "networkSetId",
            "baseName": "networkSetId",
            "type": "string"
        },
        {
            "name": "operatorId",
            "baseName": "operatorId",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return LoraNetworkSet.attributeTypeMap;
    }
}

