import {Node, TypeSemantic, ValueSemantic} from '#semantics';
import {$} from '#typing';

export type InvokeValueSemantic = ValueSemantic<$.InvokeValueSemantic>;

export function invokeValueSemantic(nodeLink: Node, type: TypeSemantic): InvokeValueSemantic {
  return {
    $: $.InvokeValueSemantic,
    nodeLink,
    type,
  };
}
