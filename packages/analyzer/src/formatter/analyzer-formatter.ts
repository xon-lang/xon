import {$AnalyzerType} from '#analyzer';
import {Text, TextRange} from '#core';

export type AnalyzerFormatter = {
  range: TextRange;
  text: Text;
};

export const $AnalyzerFormatter = () => $AnalyzerType('AnalyzerFormatter');
