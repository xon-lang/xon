import { ArrayExpressionTree } from '../../../tree/expression/array-expression/array-expression.tree';
import { createArrayType, createPlainType, createUnionType } from '../../../tree/type/type-helper';
import { TypeTree } from '../../../tree/type/type.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionType } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class ArrayExpressionType extends ExpressionType {
  public constructor(public tree: ArrayExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    if (!this.tree.items.length) return createArrayType(createPlainType('Any'));

    const itemsTypes = this.tree.items.map((x) => getExpressionType(x, this.genericsMap));
    if (itemsTypes.every((x) => x.equals(itemsTypes[0]))) return createArrayType(itemsTypes[0]);

    return createArrayType(createUnionType(itemsTypes));
  }
}
