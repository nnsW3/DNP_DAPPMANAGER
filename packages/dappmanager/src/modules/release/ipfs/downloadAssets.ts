import * as ipfs from "../../ipfs";
import memoize from "memoizee";
import { Manifest, Compose, SetupTarget, SetupWizard } from "../../../types";
import { SetupSchema, SetupUiJson } from "../../../types";
import { validateManifestBasic } from "../../manifest";
import { validateCompose } from "../../compose";
import { yamlParse } from "../../../utils/yaml";

export const downloadManifest = downloadAssetFactory<Manifest>({
  parse: jsonParse,
  validate: validateManifestBasic,
  maxLength: 100e3 // Limit size to ~100KB
});

export const downloadCompose = downloadAssetFactory<Compose>({
  parse: yamlParse,
  validate: validateCompose,
  maxLength: 10e3 // Limit size to ~10KB
});

export const downloadSetupWizard = downloadAssetFactory<SetupWizard>({
  parse: yamlParse,
  validate: setupWizard => setupWizard,
  maxLength: 100e3 // Limit size to ~100KB
});

export const downloadSetupSchema = downloadAssetFactory<SetupSchema>({
  parse: jsonParse,
  validate: setupSchema => setupSchema,
  maxLength: 100e3 // Limit size to ~100KB
});

export const downloadSetupTarget = downloadAssetFactory<SetupTarget>({
  parse: jsonParse,
  validate: setupTarget => setupTarget,
  maxLength: 10e3 // Limit size to ~10KB
});

export const downloadSetupUiJson = downloadAssetFactory<SetupUiJson>({
  parse: jsonParse,
  validate: setupUiJson => setupUiJson,
  maxLength: 10e3 // Limit size to ~10KB
});

export const downloadDisclaimer = downloadAssetFactory<string>({
  parse: content => content,
  validate: disclaimer => disclaimer,
  maxLength: 10e3 // Limit size to ~10KB
});

export const downloadGetStarted = downloadAssetFactory<string>({
  parse: content => content,
  validate: gettingStarted => gettingStarted,
  maxLength: 10e3 // Limit size to ~10KB
});

/**
 * Download, parse and validate a DNP release file
 *
 * @param hash "QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ"
 */
/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
function downloadAssetFactory<T>({
  parse,
  validate,
  maxLength
}: {
  parse: (content: string) => T;
  validate: (data: T) => T;
  maxLength?: number;
}) {
  async function downloadAsset({ hash }: { hash: string }): Promise<T> {
    const content = await ipfs.catString({ hash, maxLength });
    const data: T = parse(content);
    return validate(data);
  }
  return memoize(downloadAsset, {
    promise: true,
    normalizer: ([{ hash }]) => hash
  });
}

/**
 * JSON.parse but with a better error message
 */
function jsonParse<T>(jsonString: string): T {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    throw Error(`Error parsing JSON: ${e.message}`);
  }
}