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
import { CreateEstimatedOrderRequestShippingOptionsInner } from './createEstimatedOrderRequestShippingOptionsInner';
import { EstimatedOrderItemModel } from './estimatedOrderItemModel';
import { ShippingAddressModel } from './shippingAddressModel';

export class EstimatedOrderModel {
    /**
    * 適用された配送オプション
    */
    'appliedShippingOptions'?: Array<CreateEstimatedOrderRequestShippingOptionsInner>;
    /**
    * 差引請求額
    */
    'balanceDue'?: number;
    /**
    * 税込金額の有無
    */
    'containsTaxIncludedAmounts'?: boolean;
    /**
    * 通貨
    */
    'currency'?: EstimatedOrderModel.CurrencyEnum;
    /**
    * メールアドレス
    */
    'email'?: string;
    /**
    * 注文チャンネル
    */
    'orderChannel'?: string;
    /**
    * 発注 ID
    */
    'orderId'?: string;
    /**
    * 発注商品リスト
    */
    'orderItemList'?: Array<EstimatedOrderItemModel>;
    /**
    * お受け取り希望日
    */
    'preferredDeliveryDate'?: string;
    /**
    * 注文番号
    */
    'purchaseOrderNumber'?: string;
    'shippingAddress'?: ShippingAddressModel;
    /**
    * 商品発送先 ID
    */
    'shippingAddressId'?: string;
    /**
    * 配送料
    */
    'shippingCost'?: number;
    /**
    * 消費税
    */
    'taxAmount'?: number;
    /**
    * 配送料に含まれる税
    */
    'taxIncludedInShippingCost'?: number;
    /**
    * 配送料へ課税
    */
    'taxOnShippingCost'?: boolean;
    /**
    * 合計金額
    */
    'totalAmount'?: number;
    /**
    * 源泉徴収税
    */
    'withholdingTaxAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appliedShippingOptions",
            "baseName": "appliedShippingOptions",
            "type": "Array<CreateEstimatedOrderRequestShippingOptionsInner>"
        },
        {
            "name": "balanceDue",
            "baseName": "balanceDue",
            "type": "number"
        },
        {
            "name": "containsTaxIncludedAmounts",
            "baseName": "containsTaxIncludedAmounts",
            "type": "boolean"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "EstimatedOrderModel.CurrencyEnum"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "orderChannel",
            "baseName": "orderChannel",
            "type": "string"
        },
        {
            "name": "orderId",
            "baseName": "orderId",
            "type": "string"
        },
        {
            "name": "orderItemList",
            "baseName": "orderItemList",
            "type": "Array<EstimatedOrderItemModel>"
        },
        {
            "name": "preferredDeliveryDate",
            "baseName": "preferredDeliveryDate",
            "type": "string"
        },
        {
            "name": "purchaseOrderNumber",
            "baseName": "purchaseOrderNumber",
            "type": "string"
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "ShippingAddressModel"
        },
        {
            "name": "shippingAddressId",
            "baseName": "shippingAddressId",
            "type": "string"
        },
        {
            "name": "shippingCost",
            "baseName": "shippingCost",
            "type": "number"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number"
        },
        {
            "name": "taxIncludedInShippingCost",
            "baseName": "taxIncludedInShippingCost",
            "type": "number"
        },
        {
            "name": "taxOnShippingCost",
            "baseName": "taxOnShippingCost",
            "type": "boolean"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "number"
        },
        {
            "name": "withholdingTaxAmount",
            "baseName": "withholdingTaxAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EstimatedOrderModel.attributeTypeMap;
    }
}

export namespace EstimatedOrderModel {
    export enum CurrencyEnum {
        Jpy = <any> 'JPY',
        Usd = <any> 'USD',
        Eur = <any> 'EUR'
    }
}
