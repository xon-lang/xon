import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class IndexExpressionTree extends ExpressionTree {
  instance: ExpressionTree;

  index: ExpressionTree;

  constructor(public ctx: IndexExpressionContext) {
    super();
    if (!ctx) return;

    this.instance = getExpressionTree(ctx.expression(0));
    this.index = getExpressionTree(ctx.expression(1));
  }

  toString(): string {
    return `${this.instance}[${this.index}]`;
  }
}
