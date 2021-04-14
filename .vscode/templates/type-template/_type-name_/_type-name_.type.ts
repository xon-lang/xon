import { _TypeName_Tree } from '../../../tree/expression/_type-name_/_type-name_.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { findOperatorMember } from '../../find-type-member';
import { GenericsMap } from '../../generics-map';
import { getExpressionType } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class _TypeName_Type extends ExpressionType {
  public constructor(public tree: _TypeName_Tree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    const leftType = getExpressionType(this.tree.left, this.genericsMap);
    const rightType = getExpressionType(this.tree.left, this.genericsMap);
    return findOperatorMember(leftType, this.tree.operator, rightType);
  }
}
