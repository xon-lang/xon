import {$AnalyzerContext, AnalyzerContext} from '#analyzer';
import {CharStream, newArrayData, TextRange} from '#common';
import {AnalyzerDiagnostic, predefinedDiagnostics} from '#diagnostic';

export function newAnalyzerContext(source: CharStream): AnalyzerContext {
  return {
    $: $AnalyzerContext,
    source,
    diagnostics: newArrayData(),
    formatters: newArrayData(),

    addDiagnostic(
      range: TextRange,
      select: (diagnostics: ReturnType<typeof predefinedDiagnostics>) => AnalyzerDiagnostic,
    ): void {
      const diagnostic = select(predefinedDiagnostics(range));
      this.diagnostics.addLastItem(diagnostic);
    },
  };
}
