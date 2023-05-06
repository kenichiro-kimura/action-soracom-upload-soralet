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

export class OrderedSubscriber {
    /**
    * バンドル
    */
    'bundles'?: Array<string>;
    /**
    * デバイスの製造番号
    */
    'deviceSerialNumber'?: string;
    /**
    * eICCID
    */
    'eiccid'?: string;
    /**
    * ICCID
    */
    'iccid'?: string;
    /**
    * IMSI
    */
    'imsi'?: string;
    /**
    * MSISDN
    */
    'msisdn'?: string;
    /**
    * IoT SIM の製造番号
    */
    'serialNumber'?: string;
    /**
    * SIM ID
    */
    'simId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bundles",
            "baseName": "bundles",
            "type": "Array<string>"
        },
        {
            "name": "deviceSerialNumber",
            "baseName": "deviceSerialNumber",
            "type": "string"
        },
        {
            "name": "eiccid",
            "baseName": "eiccid",
            "type": "string"
        },
        {
            "name": "iccid",
            "baseName": "iccid",
            "type": "string"
        },
        {
            "name": "imsi",
            "baseName": "imsi",
            "type": "string"
        },
        {
            "name": "msisdn",
            "baseName": "msisdn",
            "type": "string"
        },
        {
            "name": "serialNumber",
            "baseName": "serialNumber",
            "type": "string"
        },
        {
            "name": "simId",
            "baseName": "simId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrderedSubscriber.attributeTypeMap;
    }
}

