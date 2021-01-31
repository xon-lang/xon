import { SliceExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class SliceExpressionTree extends ExpressionTree {
  value: ExpressionTree;

  start: ExpressionTree;

  end: ExpressionTree;

  step: ExpressionTree;

  constructor(public ctx: SliceExpressionContext) {
    super();
    this.value = getExpressionTree(ctx._value);
    this.start = getExpressionTree(ctx._startPos);
    this.end = getExpressionTree(ctx._endPos);
    this.step = ctx._step && getExpressionTree(ctx._step);
  }
}
