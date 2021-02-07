import { RangeExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class RangeExpressionTree extends ExpressionTree {
  min: ExpressionTree;

  max: ExpressionTree;

  constructor(public ctx: RangeExpressionContext) {
    super();

    this.min = getExpressionTree(ctx._min);
    this.max = getExpressionTree(ctx._max);
  }
}
