import { LogicalOrExpressionTree } from '../../../tree/expression/logical-or-expression/logical-or-expression.tree';
import { createPlainType } from '../../../tree/type/type-tree.helper';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class LogicalOrExpressionInference extends ExpressionInference {
  public left: ExpressionInference;

  public right: ExpressionInference;

  public constructor(public tree: LogicalOrExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.left = getExpressionInference(tree.left, this.genericsMap);
    this.right = getExpressionInference(tree.right, this.genericsMap);
    this.type = createPlainType('Boolean');
  }
}
