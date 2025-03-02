import {
  $AnalyzerType,
  $ValueDeclarationSemantic,
  DeclarationSemantic,
  TypeSemantic,
  ValueDeclarationSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type ParameterValueDeclarationSemantic = ValueDeclarationSemantic &
  Brand<'Analyzer.ParameterValueDeclarationSemantic'>;

export const $ParameterValueDeclarationSemantic = () =>
  $AnalyzerType<ParameterValueDeclarationSemantic>(
    'ParameterValueDeclarationSemantic',
    $ValueDeclarationSemantic(),
  );

export function parameterValueDeclarationSemantic(
  name: Text,
  type?: TypeSemantic | Nothing,
  documentation?: Text | Nothing,
  reference?: TextReference | Nothing,
): ParameterValueDeclarationSemantic {
  return {
    $: $ParameterValueDeclarationSemantic(),
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
