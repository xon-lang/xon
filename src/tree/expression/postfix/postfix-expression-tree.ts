import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { TokenTree } from '~/tree/token';

export class PostfixExpressionTree extends ExpressionTree {
  constructor(public operator: TokenTree, public expression: ExpressionTree) {
    super(SourceSpan.fromTwoTrees(expression, operator));
    this.addChildren(expression, operator);
  }
}
