import {Nothing} from '#common';
import {$, Node, Resource, TypeSemantic, ValueSemantic} from '#core';

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
