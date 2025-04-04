import {$AnalyzerType, $TypeDeclarationSemantic, TypeDeclarationSemantic, TypeSemantic} from '#analyzer';
import {newArrayData, Nothing, Text, TextReference} from '#common';
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
  reference: TextReference,
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
    reference,

    // getType(): TypeSemantic | Nothing {
    //   if (this.parameters?.some()) {
    //     return newFunctionTypeSemantic(this.parameters, this.type);
    //   }

    //   return this.type;
    // },
  };
}
