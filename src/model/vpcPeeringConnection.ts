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

export class VpcPeeringConnection {
    'destinationCidrBlock'?: string;
    'id'?: string;
    'peerOwnerId'?: string;
    'peerVpcId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destinationCidrBlock",
            "baseName": "destinationCidrBlock",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "peerOwnerId",
            "baseName": "peerOwnerId",
            "type": "string"
        },
        {
            "name": "peerVpcId",
            "baseName": "peerVpcId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return VpcPeeringConnection.attributeTypeMap;
    }
}
