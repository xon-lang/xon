import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
  public items: ExpressionTree[];

  public constructor(public ctx?: ArrayExpressionContext) {
    super();
    this.items = ctx.expression().map(getExpressionTree);
    // check items type consistency
  }

  public getType(): TypeTree {
    return TypeTree.create('Array', this.items.length ? this.items[0].getType() : 'Any');
  }
}
