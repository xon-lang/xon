import {DiagnosticContext, IfStatementNode} from '#analyzer';
import {newText, TextRange} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseIfStatementNode(this: IfStatementNode, context: DiagnosticContext): void {
  if (!this.expression || !this.expression.canBeExpression) {
    context.add(expectExpression(this.range));
  }
}

function expectExpression(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Expect expression`),
  );
}
