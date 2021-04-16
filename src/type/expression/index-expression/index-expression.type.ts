import { IndexExpressionTree } from '../../../tree/expression/index-expression/index-expression.tree';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class IndexExpressionType extends ExpressionType {
  public constructor(public tree: IndexExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.object, this.genericsMap);
    if (!(this.tree.object.type instanceof ArrayTypeTree)) throw new Error('Object is not array');

    fillExpressionTypes(this.tree.index, this.genericsMap);
    if (this.tree.index.type.name !== 'Integer') throw new Error('Index must be Integer type');

    this.tree.type = this.tree.object.type.itemType;
  }
}
