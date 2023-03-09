import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { TokenTree } from '~/tree/token';

export class InfixExpressionTree extends ExpressionTree {
  constructor(public operator: TokenTree, public left: ExpressionTree, public right: ExpressionTree) {
    super(SourceSpan.fromTwoTrees(left, right));
    this.addChildren(left, operator, right);
  }
}
