import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { ArrayTypeTree } from '../../type/array-type/array-type.tree';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class IndexExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public index: ExpressionTree;

  public constructor(public ctx: IndexExpressionContext) {
    super();
    this.value = getExpressionTree(ctx.expression(0));
    this.index = getExpressionTree(ctx.expression(1));
  }

  public getType(): TypeTree {
    return (this.value.getType() as ArrayTypeTree).itemType;
  }
}
