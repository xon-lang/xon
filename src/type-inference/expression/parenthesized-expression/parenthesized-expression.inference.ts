import { ParenthesizedExpressionTree } from '../../../tree/expression/parenthesized-expression/parenthesized-expression.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class ParenthesizedExpressionInference extends ExpressionInference {
  public value: ExpressionInference;

  public constructor(public tree: ParenthesizedExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.value = getExpressionInference(tree.value, this.genericsMap);
    this.type = this.value.type;
  }
}
