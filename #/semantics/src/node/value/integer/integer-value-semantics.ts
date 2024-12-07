import {IntegerTypeSemantic, Node, ValueSemantic} from '#semantics';
import {$} from '#typing';

export type IntegerValueSemantic = ValueSemantic<$.IntegerValueSemantic, IntegerTypeSemantic>;

export function integerValueSemantic(nodeLink: Node, type: IntegerTypeSemantic): IntegerValueSemantic {
  return {
    $: $.IntegerValueSemantic,
    nodeLink,
    type,
  };
}
