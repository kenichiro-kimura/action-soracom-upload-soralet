# "Upload Soralet" Action for GitHub Actions

This GitHub action uploads a soralet to SORACOM platform and create a new version.

## Usage

Here's an example workflow that uses the action:

```yaml
jobs:
  build-and-test:
        /* build optimized wasm file */
        /* and upload it as an artifact */
      - name: upload assets
        uses: actions/upload-artifact@v2
        with:
          name: soracom-orbit
          path: build/soralet-optimized.wasm
  deploy:
    runs-on: ubuntu-latest
    needs: build-and-test
    steps:
      - name: download artifact
        uses: actions/download-artifact@v2
        with:
          name: soracom-orbit
      - name: deploy
        uses: kenichiro-kimura/action-soracom-upload-soralet@1.1.0
        with:
          soracom_auth_key: ${{ secrets.AUTH_KEY }}
          soracom_auth_key_id: ${{ secrets.AUTH_KEY_ID}}
          soracom_coverage: jp
          soracom_soralet_id: sample-soralet
          soracom_soralet_filename: soralet-optimized.wasm
          soracom_delete_old_soralet: true
```

See also: https://github.com/kenichiro-kimura/soracom-orbit-assemblyscript-with-github

## Inputs

### `soracom_auth_key`[required]

Auth key to access SORACOM platform. Set it as a secret.

### `soracom_auth_key_id`[required]

Auth key id to access SORACOM platform. Set it as a secret.

### `soracom_coverage`[optional]

Coverage of SORACOM platform. Default is `jp`.

### `soracom_soralet_id`[required]

Soralet id to upload.

### `soracom_soralet_filename`[required]

Wasm filename to upload.

### `soracom_delete_old_soralet`[optional]

Delete old version of soralet in case of 'too many soralet versions' error during upload new soralet. Default is `false`.

## Outputs

### `result`

Result of upload(JSON format) like below:

```json
{
	"createdTime": 1682673805989,
	"hash": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	"operatorId": "OPxxxxxxxxxx",
	"size": xxxxx,
	"soraletId": "soralet-github-action-test",
	"srn": "srn:soracom:OPxxxxxxxxxx:jp:Soralet:soralet-github-action-test/xx",
	"version": xx
}
```
