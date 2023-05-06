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
import { ProductModel } from './productModel';

export class EstimatedOrderItemModel {
    'product'?: ProductModel;
    /**
    * 商品金額
    */
    'productAmount'?: number;
    /**
    * 購入数
    */
    'quantity'?: number;
    'taxIncludedProductAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "product",
            "baseName": "product",
            "type": "ProductModel"
        },
        {
            "name": "productAmount",
            "baseName": "productAmount",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "taxIncludedProductAmount",
            "baseName": "taxIncludedProductAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EstimatedOrderItemModel.attributeTypeMap;
    }
}

