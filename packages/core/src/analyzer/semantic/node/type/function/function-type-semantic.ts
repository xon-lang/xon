import {ArrayData, Boolean2} from '#common';
import {
  $NominalTypeDeclarationSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  ParameterTypeDeclarationSemantic,
  ParameterValueDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantic,
  corePackageType,
  isInSet,
} from '#core';
import {is} from '#typing';

export type FunctionTypeSemantic = TypeSemantic & {
  parameters: ArrayData<ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic>;
  result: TypeSemantic;
};

export const $FunctionTypeSemantic = corePackageType<FunctionTypeSemantic>(
  'FunctionTypeSemantic',
  $TypeSemantic,
);

export function functionTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  parameters: ArrayData<ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic>,
  result: TypeSemantic,
): FunctionTypeSemantic {
  return {
    $: $FunctionTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.functionTypeName,
    ),
    parameters,
    result,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic)) {
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
