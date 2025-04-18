import {$AnalyzerType, CharacterStream} from '#analyzer';
import {Brand, Model} from '#typing';

export type AnalyzerContext = Model &
  Brand<'Analyzer.AnalyzerContext'> & {
    // todo add 'isCancellationRequested for all contexts
    // isCancellationRequested: Boolean2;
    source: CharacterStream;
  };

export const $AnalyzerContext = () => $AnalyzerType('AnalyzerContext');
