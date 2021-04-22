import { NegativeExpressionTree } from '../../../tree/expression/negative-expression/negative-expression.tree';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class NegativeExpressionInference extends ExpressionInference {
  public constructor(public tree: NegativeExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.value, this.genericsMap);
    this.tree.type = this.tree.value.type;
  }
}
