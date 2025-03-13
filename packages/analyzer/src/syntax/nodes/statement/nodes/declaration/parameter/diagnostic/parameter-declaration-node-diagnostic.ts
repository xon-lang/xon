import {DiagnosticContext, ParameterDeclarationNode} from '#analyzer';

export function diagnoseParameterDeclarationNode(
  this: ParameterDeclarationNode,
  context: DiagnosticContext,
): void {
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
