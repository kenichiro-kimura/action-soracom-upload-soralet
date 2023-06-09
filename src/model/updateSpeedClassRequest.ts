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

export class UpdateSpeedClassRequest {
    /**
    * 速度クラス。以下のいずれかを指定します。ただし、サブスクリプションにあわせた速度クラスを指定してください。 - plan01s、plan01s - Low Data Volume、planP1、planX3 X3-5MB、plan-D の場合:     - `s1.minimum`     - `s1.slow`     - `s1.standard`     - `s1.fast`     - `s1.4xfast` - plan-KM1 の場合:     - `t1.standard` - plan-DU の場合:     - `u1.standard`     - `u1.slow` - バーチャル SIM/Subscriber の場合:     - `arc.standard` 
    */
    'speedClass': UpdateSpeedClassRequest.SpeedClassEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "speedClass",
            "baseName": "speedClass",
            "type": "UpdateSpeedClassRequest.SpeedClassEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdateSpeedClassRequest.attributeTypeMap;
    }
}

export namespace UpdateSpeedClassRequest {
    export enum SpeedClassEnum {
        S1Minimum = <any> 's1.minimum',
        S1Slow = <any> 's1.slow',
        S1Standard = <any> 's1.standard',
        S1Fast = <any> 's1.fast',
        S14xfast = <any> 's1.4xfast',
        T1Standard = <any> 't1.standard',
        U1Standard = <any> 'u1.standard',
        U1Slow = <any> 'u1.slow',
        ArcStandard = <any> 'arc.standard'
    }
}
