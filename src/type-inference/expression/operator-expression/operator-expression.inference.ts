import { OperatorExpressionTree } from '../../../tree/expression/operator-expression/operator-expression.tree';
import { findOperatorMember } from '../../find-type-member';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class OperatorExpressionInference extends ExpressionInference {
  public constructor(public tree: OperatorExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.left, this.genericsMap);
    fillExpressionTypes(this.tree.right, this.genericsMap);
    this.tree.type = findOperatorMember(
      this.tree.operator,
      this.tree.left.type,
      this.tree.right.type,
    );
  }
}
