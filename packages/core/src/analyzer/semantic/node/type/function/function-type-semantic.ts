import {Boolean2} from '#common';
import {
  $,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  ParameterTypeDeclarationSemantic,
  ParameterValueDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantic,
  isInSet,
  isSetOperatorTypeSemantic,
} from '#core';

export interface FunctionTypeSemantic extends TypeSemantic {
  $: $.FunctionTypeSemantic;
  parameters: (ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic)[];
  result: TypeSemantic;
}

export function functionTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  parameters: (ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic)[],
  result: TypeSemantic,
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

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      return false;
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      throw new Error('Not implemented');
    },
  };
}
