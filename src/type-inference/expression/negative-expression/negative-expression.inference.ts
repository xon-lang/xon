import { NegativeExpressionTree } from '../../../tree/expression/negative-expression/negative-expression.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class NegativeExpressionInference extends ExpressionInference {
  public value: ExpressionInference;

  public constructor(public tree: NegativeExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.value = getExpressionInference(tree.value, this.genericsMap);
    this.type = this.value.type;
  }
}
