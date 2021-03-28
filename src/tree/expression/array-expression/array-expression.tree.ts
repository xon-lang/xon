import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { createArrayType } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
  public items: ExpressionTree[];

  public constructor(public ctx?: ArrayExpressionContext) {
    super();
    this.items = ctx.expression().map(getExpressionTree) || [];
  }

  public getType(): TypeTree {
    return createArrayType(this.items[0].getType());
  }
}
