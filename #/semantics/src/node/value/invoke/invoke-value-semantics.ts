import {Node, TypeSemantics, ValueSemantic} from '#semantics';
import {$} from '#typing';

export type InvokeValueSemantic = ValueSemantic<$.InvokeValueSemantic>;

export function invokeValueSemantic(nodeLink: Node, type: TypeSemantics): InvokeValueSemantic {
  return {
    $: $.InvokeValueSemantic,
    nodeLink,
    type,
  };
}
