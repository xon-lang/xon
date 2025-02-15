import {$AnalyzerType, $ValueSemantic, IntegerTypeSemantic, Node, ValueSemantic} from '#analyzer';

export type IntegerValueSemantic = ValueSemantic & {
  type: IntegerTypeSemantic;
};

export const $IntegerValueSemantic = () =>
  $AnalyzerType<IntegerValueSemantic>('IntegerValueSemantic', $ValueSemantic());

export function integerValueSemantic(nodeLink: Node, type: IntegerTypeSemantic): IntegerValueSemantic {
  return {
    $: $IntegerValueSemantic(),
    nodeLink,
    type,
  };
}
