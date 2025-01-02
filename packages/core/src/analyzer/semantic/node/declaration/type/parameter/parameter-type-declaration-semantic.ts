import {Boolean2, newArrayData, Nothing, Text} from '#common';
import {
  $TypeDeclarationSemantic,
  corePackageType,
  DeclarationNode,
  DeclarationSemantic,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantic,
  unknownTypeSemantic,
} from '#core';

export type ParameterTypeDeclarationSemantic = TypeDeclarationSemantic & {
  value?: TypeSemantic | Nothing;
};

export const $ParameterTypeDeclarationSemantic = corePackageType<ParameterTypeDeclarationSemantic>(
  'ParameterTypeDeclarationSemantic',
  $TypeDeclarationSemantic,
);

export function parameterTypeDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: Text | Nothing,
  // todo we always know 'type' modifier
  modifier: Text | Nothing,
  name: Text,
): ParameterTypeDeclarationSemantic {
  return {
    $: $ParameterTypeDeclarationSemantic,
    nodeLink,
    usages: newArrayData(),
    documentation,
    modifier,
    name,
    type: unknownTypeSemantic(analyzer, nodeLink),

    eq(other: DeclarationSemantic): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
