import {$IdTypeSemantic, DiagnosticContext, IdNode} from '#analyzer';
import {Text, TextRange, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';
import {is} from '#typing';

export function diagnoseIdNode(this: IdNode, context: DiagnosticContext): void {
  if (is(this.semantic, $IdTypeSemantic()) && !this.semantic.declaration) {
    context.add(expectExpression(this.text, this.range));
  }
}

function expectExpression(name: Text, range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.Syntax,
    AnalyzerDiagnosticSeverity.Error,
    newText(`Cannot find name '${name}'`),
  );
}
