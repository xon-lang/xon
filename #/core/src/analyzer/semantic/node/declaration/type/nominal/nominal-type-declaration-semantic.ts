import {Boolean2, Nothing, Text} from '#common';
import {
  AttributeValueDeclarationSemantic,
  createDeclarationScope,
  DeclarationNode,
  DeclarationScope,
  DeclarationSemantic,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantic,
  unknownTypeSemantic,
} from '#core';
import {$} from '#typing';

export type NominalTypeDeclarationSemantic = TypeDeclarationSemantic & {
  $: $.NominalTypeDeclarationSemantic;
  modifier: Text;
  baseType: TypeSemantic;
  attributes: DeclarationScope<AttributeValueDeclarationSemantic>;
};

export function nominalTypeDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: Text | Nothing,
  modifier: Text,
  name: Text,
): NominalTypeDeclarationSemantic {
  return {
    $: $.NominalTypeDeclarationSemantic,
    nodeLink,
    usages: [],
    documentation,
    modifier,
    name,
    baseType: unknownTypeSemantic(analyzer, nodeLink),
    type: unknownTypeSemantic(analyzer, nodeLink),
    attributes: createDeclarationScope(analyzer),

    eq(other: DeclarationSemantic): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
