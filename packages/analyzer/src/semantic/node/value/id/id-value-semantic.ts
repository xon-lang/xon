import {
  $ValueSemantic,
  analyzerPackageType,
  Node,
  TypeSemantic,
  ValueDeclarationSemantic,
  ValueSemantic,
} from '#analyzer';
import {Nothing, Text} from '#common';

export type IdValueSemantic = ValueSemantic & {
  name: Text;
  declaration?: ValueDeclarationSemantic | Nothing;
};

export const $IdValueSemantic = analyzerPackageType<IdValueSemantic>('IdValueSemantic', $ValueSemantic);

export function idValueSemantic(
  nodeLink: Node,
  name: Text,
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
