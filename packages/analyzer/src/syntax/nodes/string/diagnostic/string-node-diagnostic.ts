import {DiagnosticContext, StringNode} from '#analyzer';
import {TextRange, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseStringNode(this: StringNode, context: DiagnosticContext): void {
  if (!this.close) {
    context.add(expectCloseToken(this.open.range));
  }
}

function expectCloseToken(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newText(`Close token expect`),
  );
}
