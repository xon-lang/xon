import {ConditionStatementNode, DiagnosticContext} from '#analyzer';

export function diagnoseConditionStatementNode(
  this: ConditionStatementNode,
  context: DiagnosticContext,
): void {}

// function expectIdentifier(range: TextRange): AnalyzerDiagnostic {
//   return newDiagnostic(
//     range,
//     AnalyzerDiagnosticType.SYNTAX,
//     AnalyzerDiagnosticSeverity.ERROR,
//     newText(`Expect identifier`),
//   );
// }
