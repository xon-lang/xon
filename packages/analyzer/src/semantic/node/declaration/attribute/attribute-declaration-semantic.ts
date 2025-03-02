import {
  $AnalyzerType,
  $ValueDeclarationSemantic,
  DeclarationSemantic,
  TypeSemantic,
  ValueDeclarationSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, newText, Nothing, Text} from '#common';

export type AttributeDeclarationSemantic = DeclarationSemantic & {
  type?: TypeSemantic | Nothing;
  alternativeName: Text;
};

export const $AttributeValueDeclarationSemantic = () =>
  $AnalyzerType<AttributeDeclarationSemantic>(
    'AttributeValueDeclarationSemantic',
    $ValueDeclarationSemantic(),
  );

export function newAttributeDeclarationSemantic(
  name: Text,
  type?: TypeSemantic | Nothing,
  documentation?: Text | Nothing,
): AttributeDeclarationSemantic {
  return {
    $: $StructuralTypeDeclarationSemantic(),
    usages: newArrayData(),
    name,
    type,
    documentation,

    equals(other: DeclarationSemantic): Boolean2 {
      if (this === other) {
        return true;
      }

      if (this.reference) {
        return !!other.reference && this.reference.equals(other.reference);
      }

      return this.name === other.name;
    },
  };
}
