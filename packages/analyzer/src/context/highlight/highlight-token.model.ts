import {$AnalyzerType, HighlightTokenType} from '#analyzer';
import {Brand, Model, TextRange} from '#core';

export type HighlightToken = Model &
  Brand<'Analyzer.HighlightToken'> & {
    type: HighlightTokenType;
    range: TextRange;
  };

export const $HighlightToken = () => $AnalyzerType<HighlightToken>('HighlightToken');
