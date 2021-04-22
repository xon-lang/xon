import { MemberExpressionTree } from '../../../tree/expression/member-expression/member-expression.tree';
import { getMemberType } from '../../find-type-member';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class MemberExpressionType extends ExpressionType {
  public constructor(public tree: MemberExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.object, this.genericsMap);
    this.tree.type = getMemberType(this.tree.object.type, this.tree.name);
  }
}
