import { BodyExpressionTree } from '~/tree/expression/body/body-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class BodyableExpressionTree implements ExpressionTree {
  constructor(public expression: ExpressionTree, public body: BodyExpressionTree) {}
}
