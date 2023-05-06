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
import { DailyBill } from './dailyBill';

export class DailyBillResponse {
    /**
    * 日ごとの利用料金
    */
    'billList'?: Array<DailyBill>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billList",
            "baseName": "billList",
            "type": "Array<DailyBill>"
        }    ];

    static getAttributeTypeMap() {
        return DailyBillResponse.attributeTypeMap;
    }
}

