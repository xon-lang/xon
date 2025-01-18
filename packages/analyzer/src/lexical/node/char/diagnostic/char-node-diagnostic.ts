import {CHAR_OPEN, CharNode} from '#analyzer';
import {ArrayData, TextRange, newArrayData, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newAnalyzerDiagnosticMessage,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseCharNode(this: CharNode): ArrayData<AnalyzerDiagnostic> {
  const diagnostics = newArrayData<AnalyzerDiagnostic>();

  if (!this.contentNode) {
    diagnostics.addLastItem(expectCharContent(this.openNode.range));
  }

  if (!this.closeNode) {
    diagnostics.addLastItem(expectCharClose(this.openNode.range));
  }

  return diagnostics;
}

function expectCharContent(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newAnalyzerDiagnosticMessage(newText(`Char has no content`)),
  );
}

function expectCharClose(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newAnalyzerDiagnosticMessage(newText(`Char open token '${CHAR_OPEN}' has no close pair`)),
  );
}
