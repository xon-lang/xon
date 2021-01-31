import { RangeExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class RangeExpressionTree extends ExpressionTree {
  start: ExpressionTree;

  end: ExpressionTree;

  step: ExpressionTree;

  constructor(public ctx: RangeExpressionContext) {
    super();
    this.start = getExpressionTree(ctx._startPos);
    this.end = getExpressionTree(ctx._endPos);
    this.step = ctx._step && getExpressionTree(ctx._step);
  }
}
