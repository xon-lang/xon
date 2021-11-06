import { InstanceExpressionTree } from '../../../tree/expression/instance-expression/instance-expression.tree';
import { GenericsMap } from '../../generics-map';
import { find } from '../../id-scope';
import { ExpressionInference } from '../expression.inference';

export class InstanceExpressionInference extends ExpressionInference {
  name: string;

  constructor(public tree: InstanceExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.id;
    this.type = find(this.name);
  }
}
