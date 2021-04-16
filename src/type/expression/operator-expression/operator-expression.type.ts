import { OperatorExpressionTree } from '../../../tree/expression/operator-expression/operator-expression.tree';
import { findOperatorMember } from '../../find-type-member';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class OperatorExpressionType extends ExpressionType {
  public constructor(public tree: OperatorExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.left, this.genericsMap);
    fillExpressionTypes(this.tree.left, this.genericsMap);
    this.tree.type = findOperatorMember(
      this.tree.left.type,
      this.tree.operator,
      this.tree.right.type,
    );
  }
}
