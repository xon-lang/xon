import { MulDivModExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class DivideExpressionTree extends ExpressionTree {
  left: ExpressionTree;

  right: ExpressionTree;

  constructor(public ctx: MulDivModExpressionContext) {
    super();
    this.left = getExpressionTree(ctx._left);
    this.right = getExpressionTree(ctx._right);
  }
}
