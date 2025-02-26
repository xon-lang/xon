import {$DiagnosticContext, DiagnosticContext} from '#analyzer';
import {newArrayData} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';

export function newDiagnosticContext(): DiagnosticContext {
  return {
    $: $DiagnosticContext(),
    diagnostics: newArrayData(),

    add(diagnostic: AnalyzerDiagnostic): void {
      this.diagnostics.addLastItem(diagnostic);
    },
  };
}
