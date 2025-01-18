import {AnalyzerContext, CHAR_OPEN, CharNode} from '#analyzer';
import {TextRange, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newAnalyzerDiagnosticMessage,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseCharNode(context: AnalyzerContext, node: CharNode): void {
  if (!node.contentNode) {
    context.addDiagnostic(expectCharContent(node.openNode.range));
  }

  if (!node.closeNode) {
    context.addDiagnostic(expectCharClose(node.openNode.range));
  }
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
