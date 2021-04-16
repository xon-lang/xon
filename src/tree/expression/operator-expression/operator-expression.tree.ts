import { ExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class OperatorExpressionTree extends ExpressionTree {
  public constructor(
    public ctx: ExpressionContext,
    public operator: string,
    public left: ExpressionTree,
    public right: ExpressionTree,
  ) {
    super();
  }
}
