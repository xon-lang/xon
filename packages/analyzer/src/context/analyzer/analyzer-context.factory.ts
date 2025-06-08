import {
  $AnalyzerContext,
  AnalyzerContext,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  CharacterStream,
  DiagnosticService,
  newDiagnostic,
  newDiagnosticService,
} from '#analyzer';
import {Text, TextRange} from '#common';

export function newAnalyzerContext(
  source: CharacterStream,
  diagnostic: DiagnosticService = newDiagnosticService(),
): AnalyzerContext {
  return {
    $: $AnalyzerContext(),
    source,
    diagnostic,

    addError(range: TextRange, text: Text): void {
      const diagnostic = newDiagnostic(
        range,
        AnalyzerDiagnosticType.Syntax,
        AnalyzerDiagnosticSeverity.Error,
        text,
      );

      this.diagnostic.add(diagnostic);
    },
  };
}
