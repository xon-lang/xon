import { OperatorExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class OperatorExpressionTree extends ExpressionTree {
  public operator: string;

  public left: ExpressionTree;

  public right: ExpressionTree;

  public constructor(public ctx?: OperatorExpressionContext) {
    super();
    if (!ctx) return;

    this.operator = ctx.operator().text;
    this.left = getExpressionTree(ctx.expression(0));
    this.right = getExpressionTree(ctx.expression(1));
  }
}
