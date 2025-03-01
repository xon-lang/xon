import {
  $AnalyzerType,
  $TypeDeclarationSemantic,
  DeclarationNode,
  DeclarationSemantic,
  newUnknownTypeSemantic,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, Nothing, Text} from '#common';
import {Brand} from '#typing';

export type StructuralTypeDeclarationSemantic = TypeDeclarationSemantic &
  Brand<'Analyzer.StructuralTypeDeclarationSemantic'>;

export const $StructuralTypeDeclarationSemantic = () =>
  $AnalyzerType<StructuralTypeDeclarationSemantic>(
    'StructuralTypeDeclarationSemantic',
    $TypeDeclarationSemantic(),
  );

export function structuralTypeDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: Text | Nothing,
  // todo we always know 'type' modifier
  modifier: Text | Nothing,
  name: Text,
): StructuralTypeDeclarationSemantic {
  return {
    $: $StructuralTypeDeclarationSemantic(),
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
