import {ConditionNode} from '#analyzer';
import {ArrayData, newArrayData} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';

export function diagnoseConditionNode(this: ConditionNode): ArrayData<AnalyzerDiagnostic> {
  const diagnostics = newArrayData<AnalyzerDiagnostic>();

  return diagnostics;
}

// function expectIdentifier(range: TextRange): AnalyzerDiagnostic {
//   return newDiagnostic(
//     range,
//     AnalyzerDiagnosticType.SYNTAX,
//     AnalyzerDiagnosticSeverity.ERROR,
//     newText(`Expect identifier`),
//   );
// }
