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

export class EmailConfigurationOfNotification {
    /**
    * true の場合、通信量がバンドルの容量に近づいた時に送付する通知メールを全て無効にします。
    */
    'exceedBundleDisabled'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exceedBundleDisabled",
            "baseName": "exceedBundleDisabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return EmailConfigurationOfNotification.attributeTypeMap;
    }
}
