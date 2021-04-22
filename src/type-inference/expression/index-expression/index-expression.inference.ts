import { IndexExpressionTree } from '../../../tree/expression/index-expression/index-expression.tree';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class IndexExpressionInference extends ExpressionInference {
  public object: ExpressionInference;

  public index: ExpressionInference;

  public constructor(public tree: IndexExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.object = getExpressionInference(tree.object, this.genericsMap);
    if (!(this.object.type instanceof ArrayTypeTree)) throw new Error('Object is not array');

    this.index = getExpressionInference(tree.index, this.genericsMap);
    if (this.index.type.name !== 'Integer') throw new Error('Index must be Integer type');

    this.type = this.object.type.itemType;
  }
}
