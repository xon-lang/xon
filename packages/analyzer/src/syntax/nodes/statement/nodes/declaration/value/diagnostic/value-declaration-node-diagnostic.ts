import {DiagnosticContext, ValueDeclarationNode} from '#analyzer';

export function diagnoseValueDeclarationNode(this: ValueDeclarationNode, context: DiagnosticContext): void {
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
