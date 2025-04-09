import {$AnalyzerType, $Semantic, DeclarationScope, Semantic} from '#analyzer';
import {Uri} from '#common';

export type ImportSemantic = Semantic & {
  uri: Uri;
  scope: DeclarationScope;
};

export const $ImportSemantic = () => $AnalyzerType<ImportSemantic>('ImportSemantic', $Semantic());

export function newImportSemantic(uri: Uri, scope: DeclarationScope): ImportSemantic {
  return {
    $: $ImportSemantic(),

    uri,
    scope,
  };
}
