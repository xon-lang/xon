import {$ExpressionNode, DiagnosticContext, IfStatementNode} from '#analyzer';
import {newText, TextRange} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';
import {is} from '#typing';

export function diagnoseIfStatementNode(this: IfStatementNode, context: DiagnosticContext): void {
  if (!this.expression || !is(this.expression, $ExpressionNode())) {
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
