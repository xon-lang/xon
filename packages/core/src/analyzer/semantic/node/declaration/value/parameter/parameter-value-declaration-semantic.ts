import {Boolean2, Nothing, String2} from '#common';
import {
  DeclarationNode,
  DeclarationSemantic,
  SemanticAnalyzer,
  unknownTypeSemantic,
  ValueDeclarationSemantic,
} from '#core';
import {$} from '#typing';

export type ParameterValueDeclarationSemantic = ValueDeclarationSemantic & {
  $: $.ParameterValueDeclarationSemantic;
};

export function parameterValueDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: String2 | Nothing,
  modifier: String2 | Nothing,
  name: String2,
): ParameterValueDeclarationSemantic {
  return {
    $: $.ParameterValueDeclarationSemantic,
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
