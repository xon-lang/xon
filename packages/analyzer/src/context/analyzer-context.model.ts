import {$AnalyzerType, CharacterStream} from '#analyzer';
import {Brand, Model} from '#typing';

export type AnalyzerContext = Model &
  Brand<'Analyzer.AnalyzerContext'> & {
    source: CharacterStream;
  };

export const $AnalyzerContext = () => $AnalyzerType('AnalyzerContext');
