import {$AnalyzerType, $Semantic, DeclarationSemantic, Semantic} from '#analyzer';
import {Brand, Integer, Nothing} from '#core';

export type IntegerSemantic = Semantic &
  Brand<'Analyzer.IntegerSemantic'> & {
    value: Integer;
    declaration?: DeclarationSemantic | Nothing;
  };

export const $IntegerSemantic = () => $AnalyzerType<IntegerSemantic>('IntegerSemantic', $Semantic());

export function newIntegerSemantic(
  value: Integer,
  declaration?: DeclarationSemantic | Nothing,
): IntegerSemantic {
  return {
    $: $IntegerSemantic(),
    value,
    declaration,
  };
}
