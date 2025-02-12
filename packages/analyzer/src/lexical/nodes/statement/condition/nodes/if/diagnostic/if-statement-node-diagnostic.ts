import {IfStatementNode} from '#analyzer';
import {ArrayData, newArrayData, newText, TextRange} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseIfStatementNode(this: IfStatementNode): ArrayData<AnalyzerDiagnostic> {
  const diagnostics = newArrayData<AnalyzerDiagnostic>();

  if (!this.conditionExpressionNode || !this.conditionExpressionNode.canBeExpression) {
    diagnostics.addLastItem(expectExpression(this.range));
  }

  return diagnostics;
}

function expectExpression(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newText(`Expect expression`),
  );
}
