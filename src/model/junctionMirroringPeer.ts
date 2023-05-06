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

export class JunctionMirroringPeer {
    'description'?: string;
    'enabled'?: boolean = false;
    'ipAddress'?: string;
    'protocol'?: JunctionMirroringPeer.ProtocolEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "JunctionMirroringPeer.ProtocolEnum"
        }    ];

    static getAttributeTypeMap() {
        return JunctionMirroringPeer.attributeTypeMap;
    }
}

export namespace JunctionMirroringPeer {
    export enum ProtocolEnum {
        Gre = <any> 'gre'
    }
}
