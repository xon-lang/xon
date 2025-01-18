import {StringNode} from '#analyzer';
import {ArrayData, TextRange, newArrayData, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newAnalyzerDiagnosticMessage,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseStringNode(this: StringNode): ArrayData<AnalyzerDiagnostic> {
  const diagnostics = newArrayData<AnalyzerDiagnostic>();

  if (!this.closeNode) {
    diagnostics.addLastItem(stringDoesNotHaveAClosingQuote(this.openNode.range));
  }

  return diagnostics;
}

function stringDoesNotHaveAClosingQuote(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newAnalyzerDiagnosticMessage(
      newText(`String does not have a closing quote`),
      newText(`Expect close token`),
    ),
  );
}
