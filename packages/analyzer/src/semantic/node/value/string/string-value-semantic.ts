import {$AnalyzerType, $ValueSemantic, StringTypeSemantic, ValueSemantic} from '#analyzer';

export type StringValueSemantic = ValueSemantic & {
  type: StringTypeSemantic;
};

export const $StringValueSemantic = () =>
  $AnalyzerType<StringValueSemantic>('StringValueSemantic', $ValueSemantic());

export function newStringValueSemantic(type: StringTypeSemantic): StringValueSemantic {
  return {
    $: $StringValueSemantic(),
    type,
  };
}
