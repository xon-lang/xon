import { findOperatorMember } from '../../../provider/find-type-member';
import { InfixExpressionTree } from '../../../tree/expression/infix-expression/infix-expression.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class OperatorExpressionInference extends ExpressionInference {
  public operator: string;
  public left: ExpressionInference;
  public right: ExpressionInference;

  public constructor(public tree: InfixExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.left = getExpressionInference(tree.left, this.genericsMap);
    this.right = getExpressionInference(tree.right, this.genericsMap);
    this.type = findOperatorMember(tree.operator, this.left.type, this.right.type);
  }
}
