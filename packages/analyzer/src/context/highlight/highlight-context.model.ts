import {$AnalyzerType, HighlightToken, HighlightTokenType} from '#analyzer';
import {ArrayData, TextRange} from '#common';
import {Brand, Model} from '#typing';

export type HighlightContext = Model &
  Brand<'Analyzer.HighlightContext'> & {
    tokens: ArrayData<HighlightToken>;

    add(type: HighlightTokenType, range: TextRange): void;
  };

export const $HighlightContext = () => $AnalyzerType<HighlightContext>('HighlightContext');
