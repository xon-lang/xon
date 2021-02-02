import { AddSubExpressionContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class AddExpressionTree extends ExpressionTree {
  left: ExpressionTree;

  right: ExpressionTree;

  constructor(public ctx: AddSubExpressionContext) {
    super();

    this.left = getExpressionTree(ctx._left);
    this.right = getExpressionTree(ctx._right);
  }

  getType(): TypeTree {
    return TypeTree.getInfixType('+', this.left, this.right);
  }
}
