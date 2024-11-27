import {Boolean2, Nothing, TextData} from '#/common';
import {
  DeclarationNode,
  DeclarationSemantic,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  unknownTypeSemantic,
} from '#/core';
import {$} from '#/typing';

export type StructuralTypeDeclarationSemantic = TypeDeclarationSemantic & {
  $: $.StructuralTypeDeclarationSemantic;
};

export function structuralTypeDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: TextData | Nothing,
  // todo we always know 'type' modifier
  modifier: TextData | Nothing,
  name: TextData,
): StructuralTypeDeclarationSemantic {
  return {
    $: $.StructuralTypeDeclarationSemantic,
    nodeLink,
    usages: [],
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
