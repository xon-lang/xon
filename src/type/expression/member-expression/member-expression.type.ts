import { MemberExpressionTree } from '../../../tree/expression/member-expression/member-expression.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { findMember } from '../../find-type-member';
import { GenericsMap } from '../../generics-map';
import { getExpressionType } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class MemberExpressionType extends ExpressionType {
  public constructor(public tree: MemberExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    const objectType = getExpressionType(this.tree.object, this.genericsMap);
    return findMember(objectType, this.tree.name);
  }
}
