import { MemberExpressionTree } from '../../../tree/expression/member-expression/member-expression.tree';
import { getMemberType } from '../../find-type-member';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class MemberExpressionInference extends ExpressionInference {
  public constructor(public tree: MemberExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.object, this.genericsMap);
    this.tree.type = getMemberType(this.tree.object.type, this.tree.name);
  }
}
