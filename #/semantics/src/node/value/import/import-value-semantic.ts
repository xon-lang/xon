import {Nothing, Resource} from '#common';
import {Node, TypeSemantic, ValueSemantic} from '#semantics';
import {$} from '#typing';

export type ImportValueSemantic = ValueSemantic<$.ImportValueSemantic> & {
  resource: Resource | Nothing;
};

export function importValueSemantic(
  nodeLink: Node,
  resource: Resource | Nothing,
  type: TypeSemantic,
): ImportValueSemantic {
  return {
    $: $.ImportValueSemantic,
    nodeLink,
    type,
    resource,
  };
}
