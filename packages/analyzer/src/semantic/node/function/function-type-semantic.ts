import {$AnalyzerType, $Semantic, DeclarationSemantic, Semantic} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type FunctionSemantic = Semantic &
  Brand<'Analyzer.FunctionSemantic'> & {
    parameters: ArrayData<DeclarationSemantic>;
    result?: Semantic | Nothing;
  };

export const $FunctionSemantic = () => $AnalyzerType<FunctionSemantic>('FunctionSemantic', $Semantic());

export function newFunctionSemantic(
  parameters: ArrayData<DeclarationSemantic>,
  result?: Semantic | Nothing,
): FunctionSemantic {
  return {
    $: $FunctionSemantic(),
    parameters,
    result,
  };
}
