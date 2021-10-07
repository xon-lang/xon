import { PostfixExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class PostfixExpressionTree extends ExpressionTree {
  public operator: string;
  public value: ExpressionTree;

  public constructor(public ctx?: PostfixExpressionContext) {
    super();
    if (!ctx) return;

    this.operator = ctx
      .operator()
      .map((x) => x.text)
      .join('');
    this.value = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    return `${this.value.toString()}${this.operator}`;
  }
}
