import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
  public items: ExpressionTree[];

  public constructor(public ctx?: ArrayExpressionContext) {
    super();
    this.items = ctx.expression().map(getExpressionTree) || [];
    if (!this.items.every((x) => x.getType().name === this.items[0].getType().name))
      throw new Error('All items should be the same type');
  }

  public getType(): TypeTree {
    return TypeTree.create('Array', this.items[0].getType());
  }
}
