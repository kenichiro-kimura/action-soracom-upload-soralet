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

export class ArcCredentialRenewRequest {
    /**
    * IoT SIM に付与する Arc クライアントの公開鍵。もしこの値が空の場合はサーバーがキーペアを生成します。
    */
    'arcClientPeerPublicKey'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "arcClientPeerPublicKey",
            "baseName": "arcClientPeerPublicKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ArcCredentialRenewRequest.attributeTypeMap;
    }
}

