import {$, IntegerTypeSemantic, Node, ValueSemantic} from '#core';

export type IntegerValueSemantic = ValueSemantic<$.IntegerValueSemantic, IntegerTypeSemantic>;

export function integerValueSemantic(nodeLink: Node, type: IntegerTypeSemantic): IntegerValueSemantic {
  return {
    $: $.IntegerValueSemantic,
    nodeLink,
    type,
  };
}
