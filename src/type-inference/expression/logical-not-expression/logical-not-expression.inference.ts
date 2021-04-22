import { LogicalNotExpressionTree } from '../../../tree/expression/logical-not-expression/logical-not-expression.tree';
import { createPlainType } from '../../../tree/type/type-tree.helper';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class LogicalNotExpressionInference extends ExpressionInference {
  public value: ExpressionInference;

  public constructor(public tree: LogicalNotExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.value = getExpressionInference(tree.value, this.genericsMap);
    this.type = createPlainType('Boolean');
  }
}
