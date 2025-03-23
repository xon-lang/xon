import {DiagnosticContext, UnknownStatementNode} from '#analyzer';
import {newText, TextRange} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseUnknownStatementNode(this: UnknownStatementNode, context: DiagnosticContext): void {
  this.errorNodes?.forEach((x) => context.add(errorNode(x.range)));
}

function errorNode(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Syntax error`),
  );
}
