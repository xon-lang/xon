import {
  $AnalyzerType,
  $IdTypeSemantic,
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
  reference: TextReference,
  name: Text,
  type?: TypeSemantic | Nothing,
  documentation?: Text | Nothing,
): VariableValueDeclarationSemantic {
  return {
    $: $VariableValueDeclarationSemantic(),
    reference,
    usages: newArrayData($IdTypeSemantic()),
    documentation,
    name,
    type,
    scope: type?.scope,

    equals(other: DeclarationSemantic): Boolean2 {
      return false;
    },
  };
}
