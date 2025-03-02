import {
  $AnalyzerType,
  $ValueDeclarationSemantic,
  DeclarationSemantic,
  TypeSemantic,
  ValueDeclarationSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, Nothing, Text, TextReference} from '#common';

export type VariableValueDeclarationSemantic = ValueDeclarationSemantic;

export const $VariableValueDeclarationSemantic = () =>
  $AnalyzerType<VariableValueDeclarationSemantic>(
    'VariableValueDeclarationSemantic',
    $ValueDeclarationSemantic(),
  );

export function newVariableValueDeclarationSemantic(
  name: Text,
  type?: TypeSemantic | Nothing,
  documentation?: Text | Nothing,
  reference?: TextReference | Nothing,
): VariableValueDeclarationSemantic {
  return {
    $: $VariableValueDeclarationSemantic(),
    usages: newArrayData(),
    documentation,
    name,
    type,
    reference,

    getType(): TypeSemantic | Nothing {
      return this.type;
    },

    equals(other: DeclarationSemantic): Boolean2 {
      return false;
    },
  };
}
