import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class IndexExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public index: ExpressionTree;

  public constructor(public ctx: IndexExpressionContext) {
    super();
    this.value = getExpressionTree(ctx.expression(0));
    this.index = getExpressionTree(ctx.expression(1));
  }
}
