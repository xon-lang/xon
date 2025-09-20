import {$AnalyzerType, CharacterStream, DiagnosticService, Node} from '#analyzer';
import {ArrayData, Text, TextRange} from '#common';
import {Brand, Model} from '#typing';

export type AnalyzerContext = Model &
  Brand<'Analyzer.AnalyzerContext'> & {
    // todo add 'isCancellationRequested for all contexts
    // isCancellationRequested: Boolean2;
    source: CharacterStream;
    diagnostic: DiagnosticService;
    hiddenNodes: ArrayData<Node>;

    addError(range: TextRange, text: Text): void;
  };

export const $AnalyzerContext = () => $AnalyzerType('AnalyzerContext');
