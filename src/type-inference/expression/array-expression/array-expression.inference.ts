import { ArrayExpressionTree } from '../../../tree/expression/array-expression/array-expression.tree';
import {
  createArrayType,
  createPlainType,
  createUnionType,
} from '../../../tree/type/type-tree.helper';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class ArrayExpressionInference extends ExpressionInference {
  items: ExpressionInference[];

  constructor(public tree: ArrayExpressionTree, public genericsMap: GenericsMap) {
    super();

    if (!tree.items.length) {
      this.type = createArrayType(createPlainType('Any'));
      return;
    }

    this.items = tree.items.map((x) => getExpressionInference(x, this.genericsMap));

    const itemsTypes = this.items.map((x) => x.type);
    this.type = itemsTypes.every((x) => x.equals(itemsTypes[0]))
      ? createArrayType(itemsTypes[0])
      : createArrayType(createUnionType(itemsTypes));
  }
}
