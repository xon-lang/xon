import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  ParameterTypeDeclarationSemantic,
  ParameterValueDeclarationSemantics,
  SemanticAnalyzer,
  TypeSemantics,
  isInSet,
} from '#semantics';
import {$, isSetOperatorTypeSemantic} from '#typing';

export type FunctionTypeSemantic = TypeSemantics & {
  $: $.FunctionTypeSemantic;
  parameters: (ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantics)[];
  result: TypeSemantics;
};

export function functionTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  parameters: (ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantics)[],
  result: TypeSemantics,
): FunctionTypeSemantic {
  return {
    $: $.FunctionTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.functionTypeName,
    ),
    parameters,
    result,

    is(other: TypeSemantics): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      return false;
    },

    eq(_other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      throw new Error('Not implemented');
    },
  };
}
