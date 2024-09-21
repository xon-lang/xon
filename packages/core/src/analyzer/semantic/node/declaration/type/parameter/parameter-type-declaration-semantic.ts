import {Boolean2, Nothing, String2} from '#common';
import {
  DeclarationNode,
  DeclarationSemantic,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantic,
  unknownTypeSemantic,
} from '#core';
import {$} from '#typing';

export type ParameterTypeDeclarationSemantic = TypeDeclarationSemantic & {
  $: $.ParameterTypeDeclarationSemantic;
  value?: TypeSemantic | Nothing;
};

export function parameterTypeDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: String2 | Nothing,
  // todo we always know 'type' modifier
  modifier: String2 | Nothing,
  name: String2,
): ParameterTypeDeclarationSemantic {
  return {
    $: $.ParameterTypeDeclarationSemantic,
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
