import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class InvokeExpressionTree implements ExpressionTree {
  constructor(public instance: ExpressionTree, public array: ArrayExpressionTree) {}
}
