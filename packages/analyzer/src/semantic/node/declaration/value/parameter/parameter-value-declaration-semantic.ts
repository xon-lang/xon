import {
  $AnalyzerType,
  $ValueDeclarationSemantic,
  DeclarationNode,
  DeclarationSemantic,
  newUnknownTypeSemantic,
  SemanticAnalyzer,
  ValueDeclarationSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, Nothing, Text} from '#common';
import {Brand} from '#typing';

export type ParameterValueDeclarationSemantic = ValueDeclarationSemantic &
  Brand<'Analyzer.ParameterValueDeclarationSemantic'>;

export const $ParameterValueDeclarationSemantic = () =>
  $AnalyzerType<ParameterValueDeclarationSemantic>(
    'ParameterValueDeclarationSemantic',
    $ValueDeclarationSemantic(),
  );

export function parameterValueDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: Text | Nothing,
  modifier: Text | Nothing,
  name: Text,
): ParameterValueDeclarationSemantic {
  return {
    $: $ParameterValueDeclarationSemantic(),
    nodeLink,
    usages: newArrayData(),
    documentation,
    modifier,
    name,
    type: newUnknownTypeSemantic(analyzer, nodeLink),

    equals(other: DeclarationSemantic): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
