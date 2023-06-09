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

export class DataTrafficStats {
    'downloadByteSizeTotal'?: number;
    'downloadPacketSizeTotal'?: number;
    'uploadByteSizeTotal'?: number;
    'uploadPacketSizeTotal'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "downloadByteSizeTotal",
            "baseName": "downloadByteSizeTotal",
            "type": "number"
        },
        {
            "name": "downloadPacketSizeTotal",
            "baseName": "downloadPacketSizeTotal",
            "type": "number"
        },
        {
            "name": "uploadByteSizeTotal",
            "baseName": "uploadByteSizeTotal",
            "type": "number"
        },
        {
            "name": "uploadPacketSizeTotal",
            "baseName": "uploadPacketSizeTotal",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DataTrafficStats.attributeTypeMap;
    }
}

