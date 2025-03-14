import {DiagnosticContext, MemberNode} from '#analyzer';
import {TextRange, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseMemberNode(this: MemberNode, context: DiagnosticContext): void {
  if (!this.id) {
    context.add(expectIdentifier(this.range));
  }
}

function expectIdentifier(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Identifier expect`),
  );
}
