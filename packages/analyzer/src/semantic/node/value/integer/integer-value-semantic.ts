import {$ValueSemantic, analyzerPackageType, IntegerTypeSemantic, Node, ValueSemantic} from '#analyzer';

export type IntegerValueSemantic = ValueSemantic & {
  type: IntegerTypeSemantic;
};

export const $IntegerValueSemantic = analyzerPackageType<IntegerValueSemantic>(
  'IntegerValueSemantic',
  $ValueSemantic,
);

export function integerValueSemantic(nodeLink: Node, type: IntegerTypeSemantic): IntegerValueSemantic {
  return {
    $: $IntegerValueSemantic,
    nodeLink,
    type,
  };
}
