import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  newAttributeList,
  NominalTypeDeclarationSemantic,
  ParameterTypeDeclarationSemantic,
  ParameterValueDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {ArrayData, Boolean2, Nothing} from '#common';
import {is} from '#typing';

export type FunctionTypeSemantic = TypeSemantic & {
  parameters: ArrayData<ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic>;
  result: TypeSemantic;
};

export const $FunctionTypeSemantic = () =>
  $AnalyzerType<FunctionTypeSemantic>('FunctionTypeSemantic', $TypeSemantic());

export function newFunctionTypeSemantic(
  declaration: NominalTypeDeclarationSemantic | Nothing,
  parameters: ArrayData<ParameterTypeDeclarationSemantic> | ArrayData<ParameterValueDeclarationSemantic>,
  result: TypeSemantic,
): FunctionTypeSemantic {
  return {
    $: $FunctionTypeSemantic(),
    declaration,
    parameters,
    result,
    attributes: newAttributeList(),

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      return false;
    },

    equals(_other: TypeSemantic): Boolean2 {
      return false;
    },
  };
}
