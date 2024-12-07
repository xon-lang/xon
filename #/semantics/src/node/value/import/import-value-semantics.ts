import {Nothing, Resource} from '#common';
import {Node, TypeSemantics, ValueSemantic} from '#semantics';
import {$} from '#typing';

export type ImportValueSemantic = ValueSemantic<$.ImportValueSemantic> & {
  resource: Resource | Nothing;
};

export function importValueSemantic(
  nodeLink: Node,
  resource: Resource | Nothing,
  type: TypeSemantics,
): ImportValueSemantic {
  return {
    $: $.ImportValueSemantic,
    nodeLink,
    type,
    resource,
  };
}
