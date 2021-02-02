import { AddSubExpressionContext } from '../../../grammar/xon-parser';
import { DefinitionTree } from '../../definition/definition.tree';
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

  getType(): DefinitionTree {
    return this.left.getType();
  }
}
