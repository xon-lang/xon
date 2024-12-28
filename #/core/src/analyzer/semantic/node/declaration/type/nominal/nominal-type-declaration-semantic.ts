import {Boolean2, Nothing, Text} from '#common';
import {
  $TypeDeclarationSemantic,
  AttributeValueDeclarationSemantic,
  corePackageType,
  DeclarationNode,
  DeclarationScope,
  DeclarationSemantic,
  newDeclarationScope,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantic,
  unknownTypeSemantic,
} from '#core';

export type NominalTypeDeclarationSemantic = TypeDeclarationSemantic & {
  modifier: Text;
  baseType: TypeSemantic;
  attributes: DeclarationScope<AttributeValueDeclarationSemantic>;
};

export const $NominalTypeDeclarationSemantic = corePackageType<NominalTypeDeclarationSemantic>(
  'NominalTypeDeclarationSemantic',
  $TypeDeclarationSemantic,
);

export function nominalTypeDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: Text | Nothing,
  modifier: Text,
  name: Text,
): NominalTypeDeclarationSemantic {
  return {
    $: $NominalTypeDeclarationSemantic,
    nodeLink,
    usages: [],
    documentation,
    modifier,
    name,
    baseType: unknownTypeSemantic(analyzer, nodeLink),
    type: unknownTypeSemantic(analyzer, nodeLink),
    attributes: newDeclarationScope(),

    eq(other: DeclarationSemantic): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
