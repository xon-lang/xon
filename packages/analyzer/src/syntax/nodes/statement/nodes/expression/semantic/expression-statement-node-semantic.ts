import {ExpressionStatementNode, SemanticContext} from '#analyzer';

export function semantifyExpressionStatementNode(
  this: ExpressionStatementNode,
  context: SemanticContext,
): void {
  if (this.expression.semantify) {
    this.expression.semantify(context);
  }
}
