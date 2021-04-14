import { IndexExpressionTree } from '../../../tree/expression/index-expression/index-expression.tree';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionType } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class IndexExpressionType extends ExpressionType {
  public constructor(public tree: IndexExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    const objectType = getExpressionType(this.tree.object, this.genericsMap);
    if (!(objectType instanceof ArrayTypeTree)) throw new Error('Object is not array');

    const indexType = getExpressionType(this.tree.index);
    if (indexType.name !== 'Integer') throw new Error('Index must be Integer type');

    return objectType.itemType;
  }
}
