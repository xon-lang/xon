import {Nothing, String2} from '#common';
import {$, Node, TypeSemantic, ValueDeclarationSemantic, ValueSemantic} from '#core';

export type IdValueSemantic = ValueSemantic<$.IdValueSemantic> & {
  name: String2;
  declaration?: ValueDeclarationSemantic | Nothing;
};

export function idValueSemantic(
  nodeLink: Node,
  name: String2,
  declaration: ValueDeclarationSemantic | Nothing,
  type: TypeSemantic,
): IdValueSemantic {
  if (declaration) {
    declaration.usages.push(nodeLink.reference);
  }

  return {
    $: $.IdValueSemantic,
    nodeLink,
    name,
    type,
    declaration,
  };
}
