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

export class FileExportResponse {
    /**
    * ファイルエクスポート ID。この ID を [`Files:getExportedFile API`](#/Files/getExportedFile) を呼び出すときに指定すると、ファイルをダウンロードするための URL を取得できます。`export_mode` に `async` を指定した場合のみ含まれます。
    */
    'exportedFileId'?: string;
    /**
    * エクスポート済みファイルのパス。`export_mode` に `async` を指定した場合のみ含まれます。
    */
    'exportedFilePath'?: string;
    /**
    * ファイルをダウンロードするための URL。`export_mode` に `sync` を指定した場合のみ含まれます。
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exportedFileId",
            "baseName": "exportedFileId",
            "type": "string"
        },
        {
            "name": "exportedFilePath",
            "baseName": "exportedFilePath",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FileExportResponse.attributeTypeMap;
    }
}
