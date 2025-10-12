import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  ParameterTypeDeclarationSemantic,
  Semantic,
} from '#analyzer';
import {ArrayData, Boolean2, Nothing} from '#common';
import {Brand, is} from '#typing';

export type FunctionTypeSemantic = Semantic &
  Brand<'Analyzer.FunctionTypeSemantic'> & {
    parameters: ArrayData<ParameterTypeDeclarationSemantic>;
    result?: Semantic | Nothing;
  };

export const $FunctionTypeSemantic = () =>
  $AnalyzerType<FunctionTypeSemantic>('FunctionTypeSemantic', $TypeSemantic());

export function newFunctionTypeSemantic(
  parameters: ArrayData<ParameterTypeDeclarationSemantic>,
  result?: Semantic | Nothing,
): FunctionTypeSemantic {
  return {
    $: $FunctionTypeSemantic(),
    parameters,
    result,

    is(other: Semantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      return false;
    },

    equals(_other: Semantic): Boolean2 {
      return false;
    },
  };
}
