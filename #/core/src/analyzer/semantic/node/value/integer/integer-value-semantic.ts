import {$ValueSemantic, corePackageType, IntegerTypeSemantic, Node, ValueSemantic} from '#core';

export type IntegerValueSemantic = ValueSemantic & {
  type: IntegerTypeSemantic;
};

export const $IntegerValueSemantic = corePackageType<IntegerValueSemantic>(
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
