import {$AnalyzerType, AnalyzerDiagnostic} from '#analyzer';
import {ArrayData} from '#common';
import {Brand, Model} from '#typing';

export type DiagnosticService = Model &
  Brand<'Diagnostic.DiagnosticService'> & {
    items: ArrayData<AnalyzerDiagnostic>;

    add(diagnostic: AnalyzerDiagnostic): void;
  };

export const $DiagnosticService = () => $AnalyzerType('DiagnosticService');
