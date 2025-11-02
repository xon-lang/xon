import {
  $AnalyzerContext,
  $Node,
  AnalyzerContext,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  CharacterStream,
  DiagnosticService,
  newDiagnostic,
  newDiagnosticService,
} from '#analyzer';
import {newArrayData, Text, TextRange} from '#core';

export function newAnalyzerContext(
  source: CharacterStream,
  diagnostic: DiagnosticService = newDiagnosticService(),
): AnalyzerContext {
  return {
    $: $AnalyzerContext(),
    source,
    diagnostic,
    hiddenNodes: newArrayData($Node()),
    extraNodes: newArrayData($Node()),

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
