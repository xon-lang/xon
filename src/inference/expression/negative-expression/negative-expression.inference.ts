import { NegativeExpressionTree } from '../../../tree/expression/prefix-expression/prefix-expression.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class NegativeExpressionInference extends ExpressionInference {
  value: ExpressionInference;

  constructor(public tree: NegativeExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.value = getExpressionInference(tree.value, this.genericsMap);
    this.type = this.value.type;
  }
}
