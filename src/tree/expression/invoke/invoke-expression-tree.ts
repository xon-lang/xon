import { SourceSpan } from '~/source/source-span';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class InvokeExpressionTree extends ExpressionTree {
  constructor(public instance: ExpressionTree, public array: ArrayExpressionTree) {
    super(SourceSpan.fromTwoTrees(instance, array));
    this.addChildren(instance, array);
  }
}
