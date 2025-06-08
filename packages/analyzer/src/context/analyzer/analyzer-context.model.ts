import {$AnalyzerType, CharacterStream, DiagnosticService} from '#analyzer';
import {Text, TextRange} from '#common';
import {Brand, Model} from '#typing';

// todo !!! rename to syntax analyzer context
export type AnalyzerContext = Model &
  Brand<'Analyzer.AnalyzerContext'> & {
    // todo add 'isCancellationRequested for all contexts
    // isCancellationRequested: Boolean2;
    source: CharacterStream;
    diagnostic: DiagnosticService;

    addError(range: TextRange, text: Text): void;
  };

export const $AnalyzerContext = () => $AnalyzerType('AnalyzerContext');
