import { NegativeExpressionTree } from '../../../tree/expression/negative-expression/negative-expression.tree';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class NegativeExpressionType extends ExpressionType {
  public constructor(public tree: NegativeExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.value, this.genericsMap);
    this.tree.type = this.tree.value.type;
  }
}
