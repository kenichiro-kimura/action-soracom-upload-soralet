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
import { GetVolumeDiscountResponse } from './getVolumeDiscountResponse';

export class ListVolumeDiscountResponse {
    /**
    * 契約済み長期利用割引リスト
    */
    'volumeDiscountList'?: Array<GetVolumeDiscountResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "volumeDiscountList",
            "baseName": "volumeDiscountList",
            "type": "Array<GetVolumeDiscountResponse>"
        }    ];

    static getAttributeTypeMap() {
        return ListVolumeDiscountResponse.attributeTypeMap;
    }
}
