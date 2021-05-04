import { IndexExpressionTree } from '../../../tree/expression/index-expression/index-expression.tree';
import { ArrayTypeTree } from '../../../tree/type/array-type/array-type.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class IndexExpressionInference extends ExpressionInference {
  public instance: ExpressionInference;

  public index: ExpressionInference;

  public constructor(public tree: IndexExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.instance = getExpressionInference(tree.instance, this.genericsMap);
    if (!(this.instance.type instanceof ArrayTypeTree)) throw new Error('Instance is not an array');

    this.index = getExpressionInference(tree.index, this.genericsMap);
    if (this.index.type.name !== 'Integer') throw new Error('Index must be Integer type');

    this.type = this.instance.type.itemType;
  }
}
