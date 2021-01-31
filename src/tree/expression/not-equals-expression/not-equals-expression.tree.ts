import { EqualityExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class NotEqualsExpressionTree extends ExpressionTree {
  left: ExpressionTree;

  right: ExpressionTree;

  constructor(public ctx: EqualityExpressionContext) {
    super();
    this.left = getExpressionTree(ctx._left);
    this.right = getExpressionTree(ctx._right);
  }
}
