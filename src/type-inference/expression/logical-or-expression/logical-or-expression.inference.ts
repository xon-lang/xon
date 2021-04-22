import { LogicalOrExpressionTree } from '../../../tree/expression/logical-or-expression/logical-or-expression.tree';
import { createPlainType } from '../../../tree/type/type-helper';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class LogicalOrExpressionInference extends ExpressionInference {
  public constructor(public tree: LogicalOrExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.left, this.genericsMap);
    fillExpressionTypes(this.tree.right, this.genericsMap);
    this.tree.type = createPlainType('Boolean');
  }
}
