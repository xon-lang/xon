import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class PrefixExpressionTree extends ExpressionTree {
  public operator: string;
  public value: ExpressionTree;

  public constructor(public ctx?: PrefixExpressionContext) {
    super();
    if (!ctx) return;

    this.operator = ctx._op.map((x) => x.text).join('');
    this.value = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    return `${this.operator}${this.value.toString()}`;
  }
}
