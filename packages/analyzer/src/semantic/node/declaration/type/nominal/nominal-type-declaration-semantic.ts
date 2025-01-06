import {
  $TypeDeclarationSemantic,
  analyzerPackageType,
  AttributeValueDeclarationSemantic,
  DeclarationNode,
  DeclarationScope,
  DeclarationSemantic,
  newDeclarationScope,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantic,
  unknownTypeSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, Nothing, Text} from '#common';

export type NominalTypeDeclarationSemantic = TypeDeclarationSemantic & {
  modifier: Text;
  baseType: TypeSemantic;
  attributes: DeclarationScope<AttributeValueDeclarationSemantic>;
};

export const $NominalTypeDeclarationSemantic = analyzerPackageType<NominalTypeDeclarationSemantic>(
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
    usages: newArrayData(),
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
