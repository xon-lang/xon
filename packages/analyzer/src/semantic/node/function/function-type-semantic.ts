import {$AnalyzerType, $Semantic, DeclarationSemantic, Semantic} from '#analyzer';
import {ArrayData, Brand, Nothing} from '#core';

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
