import { PipeExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class PipeExpressionTree extends ExpressionTree {
  public arg: string;

  public left: ExpressionTree;

  public right: ExpressionTree;

  public constructor(public ctx: PipeExpressionContext) {
    super();
    this.arg = ctx.ID()?.text;
    this.left = getExpressionTree(ctx._left);
    this.right = getExpressionTree(ctx._right);
  }
}
