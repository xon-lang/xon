import {Boolean2, Nothing, String2} from '#common';
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
  modifier: String2;
  baseType: TypeSemantic;
  attributes: DeclarationScope<AttributeValueDeclarationSemantic>;
};

export function nominalTypeDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: String2 | Nothing,
  modifier: String2,
  name: String2,
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
