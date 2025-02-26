import {$AnalyzerType} from '#analyzer';
import {ArrayData} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {Brand, Model} from '#typing';

export type DiagnosticContext = Model &
  Brand<'Diagnostic.DiagnosticContext'> & {
    diagnostics: ArrayData<AnalyzerDiagnostic>;

    add(diagnostic: AnalyzerDiagnostic): void;
  };

export const $DiagnosticContext = () => $AnalyzerType('DiagnosticContext');
