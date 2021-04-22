import { LogicalNotExpressionTree } from '../../../tree/expression/logical-not-expression/logical-not-expression.tree';
import { createPlainType } from '../../../tree/type/type-helper';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class LogicalNotExpressionInference extends ExpressionInference {
  public constructor(public tree: LogicalNotExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.value, this.genericsMap);
    this.tree.type = createPlainType('Boolean');
  }
}
