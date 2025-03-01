import {
  $AnalyzerType,
  $TypeDeclarationSemantic,
  DeclarationSemantic,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, Nothing, Text} from '#common';

export type ParameterTypeDeclarationSemantic = TypeDeclarationSemantic & {
  extendsType?: TypeSemantic | Nothing;
  defaultType?: TypeSemantic | Nothing;
};

export const $ParameterTypeDeclarationSemantic = () =>
  $AnalyzerType<ParameterTypeDeclarationSemantic>(
    'ParameterTypeDeclarationSemantic',
    $TypeDeclarationSemantic(),
  );

export function parameterTypeDeclarationSemantic(
  documentation: Text | Nothing,
  name: Text,
  extendsType?: TypeSemantic | Nothing,
  defaultType?: TypeSemantic | Nothing,
): ParameterTypeDeclarationSemantic {
  return {
    $: $ParameterTypeDeclarationSemantic(),
    usages: newArrayData(),
    documentation,
    name,
    extendsType,
    defaultType,

    equals(other: DeclarationSemantic): Boolean2 {
      return this === other;
    },
  };
}
