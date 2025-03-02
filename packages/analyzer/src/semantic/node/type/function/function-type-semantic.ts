import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  newAttributeList,
  ParameterTypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {ArrayData, Boolean2, Nothing} from '#common';
import {Brand, is} from '#typing';

export type FunctionTypeSemantic = TypeSemantic &
  Brand<'Analyzer.FunctionTypeSemantic'> & {
    parameters: ArrayData<ParameterTypeDeclarationSemantic>;
    result?: TypeSemantic | Nothing;
  };

export const $FunctionTypeSemantic = () =>
  $AnalyzerType<FunctionTypeSemantic>('FunctionTypeSemantic', $TypeSemantic());

export function newFunctionTypeSemantic(
  parameters: ArrayData<ParameterTypeDeclarationSemantic>,
  result?: TypeSemantic | Nothing,
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
