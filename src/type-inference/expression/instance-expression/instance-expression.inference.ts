import { InstanceExpressionTree } from '../../../tree/expression/instance-expression/instance-expression.tree';
import { GenericsMap } from '../../generics-map';
import { find } from '../../id-scope';
import { ExpressionInference } from '../expression.inference';

export class InstanceExpressionInference extends ExpressionInference {
  public constructor(public tree: InstanceExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    this.tree.type = find(this.tree.name);
  }
}
