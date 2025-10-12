import {$AnalyzerType, $Semantic, Semantic} from '#analyzer';
import {Brand} from '#typing';

export type UnknownSemantic = Semantic & Brand<'Analyzer.UnknownSemantic'>;

export const $UnknownSemantic = () => $AnalyzerType<UnknownSemantic>('UnknownSemantic', $Semantic());

export function newUnknownSemantic(): UnknownSemantic {
  return {
    $: $UnknownSemantic(),
  };
}
