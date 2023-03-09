import { SourceSpan } from '~/source/source-span';
import { BodyExpressionTree } from '~/tree/expression/body/body-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class BodyableExpressionTree extends ExpressionTree {
  constructor(public expression: ExpressionTree, public body: BodyExpressionTree) {
    super(SourceSpan.fromTwoTrees(expression, body));
    this.addChildren(expression, body);
  }
}
