import { MemberExpressionTree } from '../../../tree/expression/member-expression/member-expression.tree';
import { getMemberType } from '../../find-type-member';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class MemberExpressionInference extends ExpressionInference {
  public name: string;

  public object: ExpressionInference;

  public constructor(public tree: MemberExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.object = getExpressionInference(tree.object, this.genericsMap);
    this.type = getMemberType(this.object.type, tree.name);
  }
}
