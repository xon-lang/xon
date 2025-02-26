import {DiagnosticContext, ImportStatementNode} from '#analyzer';
import {newText, TextRange} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseImportStatementNode(this: ImportStatementNode, context: DiagnosticContext): void {
  if (!this.expressionNode || !this.expressionNode.canBeExpression) {
    context.add(expectExpression(this.range));
  }
}

function expectExpression(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newText(`Expect expression`),
  );
}
