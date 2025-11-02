import {$AnalyzerType, AnalyzerDiagnostic} from '#analyzer';
import {ArrayData, Brand, Model} from '#core';

export type DiagnosticService = Model &
  Brand<'Diagnostic.DiagnosticService'> & {
    items: ArrayData<AnalyzerDiagnostic>;

    add(diagnostic: AnalyzerDiagnostic): void;
  };

export const $DiagnosticService = () => $AnalyzerType('DiagnosticService');
