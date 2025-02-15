import {$AnalyzerContext, AnalyzerContext, CharacterStream} from '#analyzer';
import {newArrayData} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';

export function newAnalyzerContext(source: CharacterStream): AnalyzerContext {
  return {
    $: $AnalyzerContext(),
    source,
    diagnostics: newArrayData(),
    formatters: newArrayData(),

    addDiagnostic(diagnostic: AnalyzerDiagnostic): void {
      this.diagnostics.addLastItem(diagnostic);
    },
  };
}
