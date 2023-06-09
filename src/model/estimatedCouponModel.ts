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

export class EstimatedCouponModel {
    /**
    * クーポン額
    */
    'amount'?: number;
    /**
    * 通貨
    */
    'currency'?: EstimatedCouponModel.CurrencyEnum;
    /**
    * 有効期限
    */
    'expiryYearMonth'?: string;
    /**
    * 発注 ID
    */
    'orderId'?: string;
    /**
    * 消費税
    */
    'taxAmount'?: number;
    /**
    * 合計金額
    */
    'totalAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "EstimatedCouponModel.CurrencyEnum"
        },
        {
            "name": "expiryYearMonth",
            "baseName": "expiryYearMonth",
            "type": "string"
        },
        {
            "name": "orderId",
            "baseName": "orderId",
            "type": "string"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EstimatedCouponModel.attributeTypeMap;
    }
}

export namespace EstimatedCouponModel {
    export enum CurrencyEnum {
        Jpy = <any> 'JPY',
        Usd = <any> 'USD',
        Eur = <any> 'EUR'
    }
}
