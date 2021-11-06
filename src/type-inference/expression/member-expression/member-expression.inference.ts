import { getMemberType } from '../../../provider/find-type-member';
import { MemberExpressionTree } from '../../../tree/expression/member-expression/member-expression.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class MemberExpressionInference extends ExpressionInference {
  name: string;

  instance: ExpressionInference;

  constructor(public tree: MemberExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.id;
    this.instance = getExpressionInference(tree.instance, this.genericsMap);
    this.type = getMemberType(this.instance.type, tree.id);
  }
}
