import {$AnalyzerType, $Semantic, Semantic, TypeSemantic} from '#analyzer';

export type ValueSemantic = Semantic & {
  type: TypeSemantic;
};

export const $ValueSemantic = () => $AnalyzerType<ValueSemantic>('ValueSemantic', $Semantic());

export function newValueSemantic(type: TypeSemantic): ValueSemantic {
  return {
    $: $ValueSemantic(),
    type,
  };
}
