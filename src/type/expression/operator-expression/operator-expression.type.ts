import { OperatorExpressionTree } from '../../../tree/expression/operator-expression/operator-expression.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { findOperatorMember } from '../../find-type-member';
import { GenericsMap } from '../../generics-map';
import { getExpressionType } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class OperatorExpressionType extends ExpressionType {
  public constructor(public tree: OperatorExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    const leftType = getExpressionType(this.tree.left, this.genericsMap);
    const rightType = getExpressionType(this.tree.left, this.genericsMap);
    return findOperatorMember(leftType, this.tree.operator, rightType);
  }
}
