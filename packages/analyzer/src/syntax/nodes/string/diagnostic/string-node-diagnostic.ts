import {StringNode} from '#analyzer';
import {ArrayData, TextRange, newArrayData, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseStringNode(this: StringNode): ArrayData<AnalyzerDiagnostic> {
  const diagnostics = newArrayData<AnalyzerDiagnostic>();

  if (!this.closeNode) {
    diagnostics.addLastItem(expectCloseToken(this.openNode.range));
  }

  return diagnostics;
}

function expectCloseToken(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newText(`Expect close token`),
  );
}
