import {$AnalyzerType, HighlightTokenType} from '#analyzer';
import {TextRange} from '#common';
import {Brand, Model} from '#typing';

export type HighlightToken = Model &
  Brand<'Analyzer.HighlightToken'> & {
    type: HighlightTokenType;
    range: TextRange;
  };

export const $HighlightToken = () => $AnalyzerType<HighlightToken>('HighlightToken');
