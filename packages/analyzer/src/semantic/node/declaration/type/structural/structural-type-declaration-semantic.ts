import {
  $AnalyzerType,
  $TypeDeclarationSemantic,
  DeclarationSemantic,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, Nothing, Text} from '#common';
import {Brand} from '#typing';

export type StructuralTypeDeclarationSemantic = TypeDeclarationSemantic &
  Brand<'Analyzer.StructuralTypeDeclarationSemantic'> & {
    type: TypeSemantic | Nothing;
  };

export const $StructuralTypeDeclarationSemantic = () =>
  $AnalyzerType<StructuralTypeDeclarationSemantic>(
    'StructuralTypeDeclarationSemantic',
    $TypeDeclarationSemantic(),
  );

export function structuralTypeDeclarationSemantic(
  name: Text,
  type?: TypeSemantic | Nothing,
  documentation?: Text | Nothing,
): StructuralTypeDeclarationSemantic {
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
