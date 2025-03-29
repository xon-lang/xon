import {$AnalyzerType, $Semantic, ImportScope, Semantic} from '#analyzer';

export type ImportStatementNodeSemantic = Semantic & {
  scope: ImportScope;
};

export const $ImportStatementNodeSemantic = () =>
  $AnalyzerType<ImportStatementNodeSemantic>('ImportStatementNodeSemantic', $Semantic());

export function newImportStatementNodeSemantic(scope: ImportScope): ImportStatementNodeSemantic {
  return {
    $: $ImportStatementNodeSemantic(),

    scope,
  };
}
