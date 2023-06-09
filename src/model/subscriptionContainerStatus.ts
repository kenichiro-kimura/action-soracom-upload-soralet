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
import { SubscriptionContainer } from './subscriptionContainer';
import { SubscriptionContainerStatusCountryMappingValue } from './subscriptionContainerStatusCountryMappingValue';

export class SubscriptionContainerStatus {
    'containers'?: Array<SubscriptionContainer>;
    'countryMapping'?: { [key: string]: SubscriptionContainerStatusCountryMappingValue; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containers",
            "baseName": "containers",
            "type": "Array<SubscriptionContainer>"
        },
        {
            "name": "countryMapping",
            "baseName": "countryMapping",
            "type": "{ [key: string]: SubscriptionContainerStatusCountryMappingValue; }"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionContainerStatus.attributeTypeMap;
    }
}

