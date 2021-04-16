import { ParenthesizedExpressionTree } from '../../../tree/expression/parenthesized-expression/parenthesized-expression.tree';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class ParenthesizedExpressionType extends ExpressionType {
  public constructor(public tree: ParenthesizedExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.value, this.genericsMap);
    this.tree.type = this.tree.value.type;
  }
}
