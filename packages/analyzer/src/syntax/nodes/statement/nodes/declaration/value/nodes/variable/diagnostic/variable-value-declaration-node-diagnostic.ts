import {DiagnosticContext, VariableValueDeclarationNode} from '#analyzer';

export function diagnoseVariableValueDeclarationNode(
  this: VariableValueDeclarationNode,
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
