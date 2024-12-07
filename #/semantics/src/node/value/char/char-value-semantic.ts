import {CharTypeSemantic, Node, ValueSemantic} from '#semantics';
import {$} from '#typing';

export type CharValueSemantic = ValueSemantic<$.CharValueSemantic, CharTypeSemantic>;

export function charValueSemantic(nodeLink: Node, type: CharTypeSemantic): CharValueSemantic {
  return {
    $: $.CharValueSemantic,
    nodeLink,
    type,
  };
}
