import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  newAttributeList,
  ParameterTypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {ArrayData, Boolean2} from '#common';
import {is} from '#typing';

export type FunctionTypeSemantic = TypeSemantic & {
  parameters: ArrayData<ParameterTypeDeclarationSemantic>;
  result: TypeSemantic;
};

export const $FunctionTypeSemantic = () =>
  $AnalyzerType<FunctionTypeSemantic>('FunctionTypeSemantic', $TypeSemantic());

export function newFunctionTypeSemantic(
  parameters: ArrayData<ParameterTypeDeclarationSemantic>,
  result: TypeSemantic,
): FunctionTypeSemantic {
  return {
    $: $FunctionTypeSemantic(),
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
