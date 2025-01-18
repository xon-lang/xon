import {$AnalyzerContext, AnalyzerContext} from '#analyzer';
import {CharStream, newArrayData} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';

export function newAnalyzerContext(source: CharStream): AnalyzerContext {
  return {
    $: $AnalyzerContext,
    source,
    diagnostics: newArrayData(),
    formatters: newArrayData(),

    addDiagnostic(diagnostic: AnalyzerDiagnostic): void {
      this.diagnostics.addLastItem(diagnostic);
    },
  };
}
