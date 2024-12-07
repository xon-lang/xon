import {Boolean2, Nothing, TextData} from '#common';
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

export type NominalTypeDeclarationSemantics = TypeDeclarationSemantics & {
  modifier: TextData;
  baseType: TypeSemantics;
  attributes: DeclarationScope<AttributeValueDeclarationSemantics>;
};

export const $NominalTypeDeclarationSemantics = semanticsPackageType<NominalTypeDeclarationSemantics>(
  'NominalTypeDeclarationSemantics',
  $TypeDeclarationSemantics,
);

export function newNominalTypeDeclarationSemantic(
  documentation: TextData | Nothing,
  modifier: TextData,
  name: TextData,
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
