import {DiagnosticContext, ExpressionStatementNode} from '#analyzer';
import {newText, TextRange} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseExpressionStatementNode(
  this: ExpressionStatementNode,
  context: DiagnosticContext,
): void {
  // todo create UnknownStatement
  // this.expression.diagnose(context);

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
