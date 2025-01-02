import {Nothing, String2} from '#common';
import {
  $ValueSemantic,
  corePackageType,
  Node,
  TypeSemantic,
  ValueDeclarationSemantic,
  ValueSemantic,
} from '#core';

export type IdValueSemantic = ValueSemantic & {
  name: String2;
  declaration?: ValueDeclarationSemantic | Nothing;
};

export const $IdValueSemantic = corePackageType<IdValueSemantic>('IdValueSemantic', $ValueSemantic);

export function idValueSemantic(
  nodeLink: Node,
  name: String2,
  declaration: ValueDeclarationSemantic | Nothing,
  type: TypeSemantic,
): IdValueSemantic {
  if (declaration) {
    declaration.usages.addLastItem(nodeLink.reference);
  }

  return {
    $: $IdValueSemantic,
    nodeLink,
    name,
    type,
    declaration,
  };
}
