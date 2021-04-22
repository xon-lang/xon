import { LogicalAndExpressionTree } from '../../../tree/expression/logical-and-expression/logical-and-expression.tree';
import { createPlainType } from '../../../tree/type/type-helper';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class LogicalAndExpressionType extends ExpressionType {
  public constructor(public tree: LogicalAndExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.left, this.genericsMap);
    fillExpressionTypes(this.tree.right, this.genericsMap);
    this.tree.type = createPlainType('Boolean');
  }
}
