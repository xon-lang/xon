import { LogicalOrExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LogicalOrExpressionTree extends ExpressionTree {
  public left: ExpressionTree;

  public right: ExpressionTree;

  public constructor(public ctx?: LogicalOrExpressionContext) {
    super();
    if (!ctx) return;

    this.left = getExpressionTree(ctx._left);
    this.right = getExpressionTree(ctx._right);
  }

  public toString(): string {
    return `${this.left.toString()} or ${this.right.toString()}`;
  }
}
