import { InstanceExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class InstanceExpressionTree extends ExpressionTree {
  public constructor(public ctx?: InstanceExpressionContext) {
    super();
  }
}
