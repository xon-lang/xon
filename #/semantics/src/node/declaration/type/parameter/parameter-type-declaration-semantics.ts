import {Boolean2, Nothing, TextData} from '#common';
import {
  DeclarationNode,
  DeclarationSemantics,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantics,
  unknownTypeSemantic,
} from '#semantics';
import {$} from '#typing';

export type ParameterTypeDeclarationSemantic = TypeDeclarationSemantic & {
  $: $.ParameterTypeDeclarationSemantic;
  value?: TypeSemantics | Nothing;
};

export function parameterTypeDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: TextData | Nothing,
  // todo we always know 'type' modifier
  modifier: TextData | Nothing,
  name: TextData,
): ParameterTypeDeclarationSemantic {
  return {
    $: $.ParameterTypeDeclarationSemantic,
    nodeLink,
    usages: [],
    documentation,
    modifier,
    name,
    type: unknownTypeSemantic(analyzer, nodeLink),

    eq(other: DeclarationSemantics): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
