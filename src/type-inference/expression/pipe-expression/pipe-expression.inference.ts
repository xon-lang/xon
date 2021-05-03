import { PipeExpressionTree } from '../../../tree/expression/pipe-expression/pipe-expression.tree';
import { GenericsMap } from '../../generics-map';
import { addToScope, popScope, pushScope } from '../../id-scope';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class PipeExpressionInference extends ExpressionInference {
  public arg: string;

  public left: ExpressionInference;

  public right: ExpressionInference;

  public constructor(public tree: PipeExpressionTree, public genericsMap: GenericsMap) {
    super();

    const left = getExpressionInference(tree.left, genericsMap);
    pushScope();
    addToScope(tree.arg, left.type);
    this.right = getExpressionInference(tree.right, genericsMap);
    popScope();
    this.type = this.right.type;
  }
}
