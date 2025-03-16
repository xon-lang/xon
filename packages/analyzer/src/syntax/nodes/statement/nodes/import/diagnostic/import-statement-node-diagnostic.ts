import {DiagnosticContext, ImportStatementNode} from '#analyzer';
import {newText, Text, TextRange} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseImportStatementNode(this: ImportStatementNode, context: DiagnosticContext): void {
  if (!this.expression?.content) {
    context.add(expectExpression(this.range));

    return;
  }

  if (!this.semantic) {
    context.add(cannotFindModule(this.expression.content.text, this.expression.range));
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

function cannotFindModule(path: Text, range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Cannot find module '${path}'`),
  );
}
