import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { GenericsMap } from '../../generics-map';
import { find } from '../../id-scope';
import { ExpressionType } from '../expression.type';

export class IdExpressionType extends ExpressionType {
  public constructor(public tree: IdExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    return find(this.tree.name);
  }
}
