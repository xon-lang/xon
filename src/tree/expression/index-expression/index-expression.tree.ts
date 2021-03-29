import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { ArrayTypeTree } from '../../type/array-type/array-type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class IndexExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public index: ExpressionTree;

  public constructor(public ctx: IndexExpressionContext) {
    super();
    this.value = getExpressionTree(ctx.expression(0));
    this.index = getExpressionTree(ctx.expression(1));

    this.dataType = (this.value.dataType as ArrayTypeTree)?.itemType;
  }
}
