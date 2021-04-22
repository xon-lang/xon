import { ArrayExpressionTree } from '../../../tree/expression/array-expression/array-expression.tree';
import { createArrayType, createPlainType, createUnionType } from '../../../tree/type/type-helper';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class ArrayExpressionInference extends ExpressionInference {
  public constructor(public tree: ArrayExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    if (!this.tree.items.length) {
      this.tree.type = createArrayType(createPlainType('Any'));
      return;
    }

    this.tree.items.forEach((x) => fillExpressionTypes(x, this.genericsMap));

    const itemsTypes = this.tree.items.map((x) => x.type);
    if (itemsTypes.every((x) => x.equals(itemsTypes[0])))
      this.tree.type = createArrayType(itemsTypes[0]);
    else this.tree.type = createArrayType(createUnionType(itemsTypes));
  }
}
