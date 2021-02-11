import { ObjectExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ObjectExpressionTree extends ExpressionTree {
  public items: { key: string; value: ExpressionTree }[];

  public constructor(public ctx?: ObjectExpressionContext) {
    super();
    if (!ctx) return;
    this.items = ctx.ID().map((x, i) => ({
      key: x.text,
      value: getExpressionTree(ctx.expression(i))
    }));
  }
}
