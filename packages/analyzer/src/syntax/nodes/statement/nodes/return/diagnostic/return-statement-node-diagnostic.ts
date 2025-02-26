import {DiagnosticContext, ReturnStatementNode} from '#analyzer';

export function diagnoseReturnStatementNode(this: ReturnStatementNode, context: DiagnosticContext): void {
  // if (!this.conditionExpressionNode || !this.conditionExpressionNode.canBeExpression) {
  //   diagnostics.addLastItem(expectExpression(this.range));
  // }
}

// function expectExpression(range: TextRange): AnalyzerDiagnostic {
//   return newDiagnostic(
//     range,
//     AnalyzerDiagnosticType.SYNTAX,
//     AnalyzerDiagnosticSeverity.ERROR,
//     newText(`Expect expression`),
//   );
// }
