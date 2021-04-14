import { ParenthesizedExpressionTree } from '../../../tree/expression/parenthesized-expression/parenthesized-expression.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionType } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class ParenthesizedExpressionType extends ExpressionType {
  public constructor(public tree: ParenthesizedExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    return getExpressionType(this.tree.value, this.genericsMap);
  }
}
