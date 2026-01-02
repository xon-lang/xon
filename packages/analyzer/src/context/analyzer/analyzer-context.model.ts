import {$AnalyzerType, CharacterStream, DiagnosticService, Node} from '#analyzer';
import {ArrayData, Brand, Model, Text, TextRange} from '#core';

export type AnalyzerContext = Model &
  Brand<'Analyzer.AnalyzerContext'> & {
    // todo add 'isCancellationRequested for all contexts
    // isCancellationRequested: Boolean2;
    source: CharacterStream;
    diagnostic: DiagnosticService;
    hiddenNodes: ArrayData<Node>;
    extraNodes: ArrayData<Node>;

    addError(range: TextRange, message: Text): void;
  };

export const $AnalyzerContext = () => $AnalyzerType('AnalyzerContext');
