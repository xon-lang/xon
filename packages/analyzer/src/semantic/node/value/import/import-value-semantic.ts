import {$AnalyzerType, $ValueSemantic, ImportScope, ValueSemantic} from '#analyzer';

export type ImportValueSemantic = ValueSemantic & {
  scope: ImportScope;
};

export const $ImportValueSemantic = () =>
  $AnalyzerType<ImportValueSemantic>('ImportValueSemantic', $ValueSemantic());

export function importValueSemantic(scope: ImportScope): ImportValueSemantic {
  return {
    $: $ImportValueSemantic(),

    scope,
  };
}
