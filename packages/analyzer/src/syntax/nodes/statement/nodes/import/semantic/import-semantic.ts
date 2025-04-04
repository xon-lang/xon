import {$AnalyzerType, $Semantic, ImportScope, Semantic} from '#analyzer';

export type ImportSemantic = Semantic & {
  scope: ImportScope;
};

export const $ImportSemantic = () => $AnalyzerType<ImportSemantic>('ImportSemantic', $Semantic());

export function newImportSemantic(scope: ImportScope): ImportSemantic {
  return {
    $: $ImportSemantic(),

    scope,
  };
}
