import {$AnalyzerType, $Semantic, Semantic, SemanticScope} from '#analyzer';
import {Nothing, Text, Uri} from '#common';

export type ImportSemantic = Semantic & {
  originalPath: Text;
  uri: Uri;
  scope?: SemanticScope | Nothing;
};

export const $ImportSemantic = () => $AnalyzerType<ImportSemantic>('ImportSemantic', $Semantic());

export function newImportSemantic(
  originalPath: Text,
  uri: Uri,
  scope: SemanticScope | Nothing,
): ImportSemantic {
  // todo try to calculate 'uri' based on 'originalPath'
  return {
    $: $ImportSemantic(),

    originalPath,
    uri,
    scope,
  };
}
