import { PostfixExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class PostfixExpressionTree extends ExpressionTree {
  public name: string;
  public value: ExpressionTree;

  public constructor(public ctx?: PostfixExpressionContext) {
    super();
    if (!ctx) return;

    this.name = ctx.ID().text;
    this.value = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    return `${this.value.toString()}${this.name}`;
  }
}
