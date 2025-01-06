import {
  $TypeDeclarationSemantic,
  analyzerPackageType,
  DeclarationNode,
  DeclarationSemantic,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  unknownTypeSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, Nothing, Text} from '#common';
import {Brand} from '#typing';

export type StructuralTypeDeclarationSemantic = TypeDeclarationSemantic &
  Brand<'Core.StructuralTypeDeclarationSemantic'>;

export const $StructuralTypeDeclarationSemantic = analyzerPackageType<StructuralTypeDeclarationSemantic>(
  'StructuralTypeDeclarationSemantic',
  $TypeDeclarationSemantic,
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
    $: $StructuralTypeDeclarationSemantic,
    nodeLink,
    usages: newArrayData(),
    documentation,
    modifier,
    name,
    type: unknownTypeSemantic(analyzer, nodeLink),

    equals(other: DeclarationSemantic): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
