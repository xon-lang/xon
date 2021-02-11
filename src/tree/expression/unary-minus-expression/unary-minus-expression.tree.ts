import { UnaryMinusExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class UnaryMinusExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public constructor(public ctx: UnaryMinusExpressionContext) {
    super();
    this.value = getExpressionTree(ctx.expression());
  }
}
