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
import { SoraCamDeviceConfiguration } from './soraCamDeviceConfiguration';
import { SoraCamDeviceLicenseInfo } from './soraCamDeviceLicenseInfo';

export class SoraCamDevice {
    /**
    * ソラカメ対応カメラに適用されているライセンス。この情報は、[`SoraCam:listSoraCamDevices API`](/ja-jp/tools/api/reference/#/SoraCam/listSoraCamDevices) を使用しても取得できません。[`SoraCam:getSoraCamDevice API`](/ja-jp/tools/api/reference/#/SoraCam/getSoraCamDevice) を使用してください。 
    */
    'appliedLicenses'?: Array<SoraCamDeviceLicenseInfo>;
    'configuration'?: SoraCamDeviceConfiguration;
    /**
    * ソラカメ対応カメラが現在クラウドに接続されているかどうか
    */
    'connected'?: boolean;
    /**
    * ソラカメ対応カメラの種類  - `Camera` 
    */
    'deviceCategory'?: string;
    /**
    * ソラカメ対応カメラのデバイス ID
    */
    'deviceId'?: string;
    /**
    * ソラカメ対応カメラの現在のファームウェアバージョン
    */
    'firmwareVersion'?: string;
    /**
    * ソラカメ対応カメラが最後にクラウドに接続した UNIX 時間 (ミリ秒)
    */
    'lastConnectedTime'?: number;
    /**
    * ソラカメ対応カメラの名前
    */
    'name'?: string;
    /**
    * ソラカメ対応カメラの製品名
    */
    'productDisplayName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appliedLicenses",
            "baseName": "appliedLicenses",
            "type": "Array<SoraCamDeviceLicenseInfo>"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "SoraCamDeviceConfiguration"
        },
        {
            "name": "connected",
            "baseName": "connected",
            "type": "boolean"
        },
        {
            "name": "deviceCategory",
            "baseName": "deviceCategory",
            "type": "string"
        },
        {
            "name": "deviceId",
            "baseName": "deviceId",
            "type": "string"
        },
        {
            "name": "firmwareVersion",
            "baseName": "firmwareVersion",
            "type": "string"
        },
        {
            "name": "lastConnectedTime",
            "baseName": "lastConnectedTime",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "productDisplayName",
            "baseName": "productDisplayName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SoraCamDevice.attributeTypeMap;
    }
}

