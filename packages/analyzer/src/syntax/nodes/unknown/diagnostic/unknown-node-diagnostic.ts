import {DiagnosticContext, UnknownNode} from '#analyzer';
import {TextRange, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseUnknownNode(this: UnknownNode, context: DiagnosticContext): void {
  context.add(unknownCharacter(this.range));
}

function unknownCharacter(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Unknown character`),
  );
}
