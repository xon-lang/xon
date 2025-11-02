import {$AnalyzerType, HighlightToken, HighlightTokenType} from '#analyzer';
import {ArrayData, Brand, Model, TextRange} from '#core';

export type HighlightContext = Model &
  Brand<'Analyzer.HighlightContext'> & {
    highlights: ArrayData<HighlightToken>;

    add(type: HighlightTokenType, range: TextRange): void;
  };

export const $HighlightContext = () => $AnalyzerType<HighlightContext>('HighlightContext');
