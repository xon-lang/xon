import {
  $AnalyzerType,
  $TypeDeclarationSemantic,
  DeclarationSemantic,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, Nothing, Text} from '#common';

export type NominalTypeDeclarationSemantic = TypeDeclarationSemantic & {
  baseType: TypeSemantic | Nothing;
  // attributes: DeclarationScope<AttributeValueDeclarationSemantic>;
};

export const $NominalTypeDeclarationSemantic = () =>
  $AnalyzerType<NominalTypeDeclarationSemantic>('NominalTypeDeclarationSemantic', $TypeDeclarationSemantic());

export function newNominalTypeDeclarationSemantic(
  name: Text,
  baseType?: TypeSemantic | Nothing,
  documentation?: Text | Nothing,
): NominalTypeDeclarationSemantic {
  return {
    $: $NominalTypeDeclarationSemantic(),
    usages: newArrayData(),
    documentation,
    name,
    baseType,
    // attributes: newDeclarationScope(),

    equals(other: DeclarationSemantic): Boolean2 {
      return this === other;
    },
  };
}
