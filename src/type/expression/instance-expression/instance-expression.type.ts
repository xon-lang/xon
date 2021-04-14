import { InstanceExpressionTree } from '../../../tree/expression/instance-expression/instance-expression.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { GenericsMap } from '../../generics-map';
import { find } from '../../id-scope';
import { ExpressionType } from '../expression.type';

export class InstanceExpressionType extends ExpressionType {
  public constructor(public tree: InstanceExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    return find(this.tree.name);
  }
}
