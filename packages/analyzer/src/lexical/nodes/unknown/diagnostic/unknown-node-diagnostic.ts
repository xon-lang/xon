import {UnknownNode} from '#analyzer';
import {ArrayData, TextRange, newArrayData, newText} from '#common';
import {
  AnalyzerDiagnostic,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  newAnalyzerDiagnosticMessage,
  newDiagnostic,
} from '#diagnostic';

export function diagnoseUnknownNode(this: UnknownNode): ArrayData<AnalyzerDiagnostic> {
  return newArrayData([unknownCharacter(this.range)]);
}

function unknownCharacter(range: TextRange): AnalyzerDiagnostic {
  return newDiagnostic(
    range,
    AnalyzerDiagnosticType.SYNTAX,
    AnalyzerDiagnosticSeverity.ERROR,
    newAnalyzerDiagnosticMessage(newText(`Unknown character`)),
  );
}
