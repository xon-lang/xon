import { ObjectExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ObjectExpressionTree extends ExpressionTree {
  items: { key: string; value: ExpressionTree }[];

  constructor(public ctx?: ObjectExpressionContext) {
    super();
    if (!ctx) return;
    this.items = ctx.objectItem().map((x) => ({
      key: x.ID().text,
      value: getExpressionTree(x.expression()),
    }));
  }
}
