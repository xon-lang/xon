import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ParenthesizedExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public constructor(public ctx: ParenthesizedExpressionContext) {
    super();
    this.value = getExpressionTree(ctx.expression());
  }
}
