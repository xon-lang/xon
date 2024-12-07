import {Boolean2, Nothing, TextData} from '#common';
import {
  AttributeValueDeclarationSemantic,
  createDeclarationScope,
  DeclarationNode,
  DeclarationScope,
  DeclarationSemantics,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantics,
  unknownTypeSemantic,
} from '#semantics';
import {$} from '#typing';

export type NominalTypeDeclarationSemantic = TypeDeclarationSemantic & {
  $: $.NominalTypeDeclarationSemantic;
  modifier: TextData;
  baseType: TypeSemantics;
  attributes: DeclarationScope<AttributeValueDeclarationSemantic>;
};

export function nominalTypeDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: TextData | Nothing,
  modifier: TextData,
  name: TextData,
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

    eq(other: DeclarationSemantics): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
