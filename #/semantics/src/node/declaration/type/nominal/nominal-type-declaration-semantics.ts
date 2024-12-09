import {Text} from '#common';
import {
  $TypeDeclarationSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  DeclarationSemantics,
  newDeclarationScope,
  newUnknownTypeSemantics,
  semanticsPackageType,
  TypeDeclarationSemantics,
  TypeSemantics,
} from '#semantics';
import {Boolean2, Nothing} from '#typing';

export type NominalTypeDeclarationSemantics = TypeDeclarationSemantics & {
  modifier: Text;
  baseType: TypeSemantics;
  attributes: DeclarationScope<AttributeValueDeclarationSemantics>;
};

export const $NominalTypeDeclarationSemantics = semanticsPackageType<NominalTypeDeclarationSemantics>(
  'NominalTypeDeclarationSemantics',
  $TypeDeclarationSemantics,
);

export function newNominalTypeDeclarationSemantic(
  documentation: Text | Nothing,
  modifier: Text,
  name: Text,
): NominalTypeDeclarationSemantics {
  return {
    $: $NominalTypeDeclarationSemantics,
    usages: [],
    documentation,
    modifier,
    name,
    baseType: newUnknownTypeSemantics(),
    type: newUnknownTypeSemantics(),
    attributes: newDeclarationScope(),

    equals(other: DeclarationSemantics): Boolean2 {
      return false;
    },
  };
}
