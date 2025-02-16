import {ImportStatementNode} from '#analyzer';
import {ArrayData, newArrayData, newText, TextRange} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseImportStatementNode(this: ImportStatementNode): ArrayData<AnalyzerDiagnostic> {
  const diagnostics = newArrayData<AnalyzerDiagnostic>();

  if (!this.expressionNode || !this.expressionNode.canBeExpression) {
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
