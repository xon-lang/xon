import {NominalTypeStatementNode} from '#analyzer';
import {ArrayData, newArrayData} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';

export function diagnoseNominalTypeStatementNode(
  this: NominalTypeStatementNode,
): ArrayData<AnalyzerDiagnostic> {
  const diagnostics = newArrayData<AnalyzerDiagnostic>();

  // if (!this.conditionExpressionNode || !this.conditionExpressionNode.canBeExpression) {
  //   diagnostics.addLastItem(expectExpression(this.range));
  // }

  return diagnostics;
}

// function expectExpression(range: TextRange): AnalyzerDiagnostic {
//   return newDiagnostic(
//     range,
//     AnalyzerDiagnosticType.SYNTAX,
//     AnalyzerDiagnosticSeverity.ERROR,
//     newText(`Expect expression`),
//   );
// }
