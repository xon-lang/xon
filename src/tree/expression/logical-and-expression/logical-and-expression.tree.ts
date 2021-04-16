import { LogicalAndExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LogicalAndExpressionTree extends ExpressionTree {
  public left: ExpressionTree;

  public right: ExpressionTree;

  public constructor(public ctx?: LogicalAndExpressionContext) {
    super();
    if (!ctx) return;

    this.left = getExpressionTree(ctx._left);
    this.right = getExpressionTree(ctx._right);
  }
}
