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

export class PriceByQuantity {
    /**
    * 最低数量
    */
    'minQuantity'?: number;
    /**
    * 販売価格
    */
    'price'?: number;
    /**
    * 税込販売価格
    */
    'taxIncludedPrice'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "minQuantity",
            "baseName": "minQuantity",
            "type": "number"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "taxIncludedPrice",
            "baseName": "taxIncludedPrice",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PriceByQuantity.attributeTypeMap;
    }
}

