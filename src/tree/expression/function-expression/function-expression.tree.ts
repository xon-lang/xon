import { FunctionExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class FunctionExpressionTree extends ExpressionTree {
  public args: { name?: string; value: ExpressionTree }[];

  public object: ExpressionTree;

  public constructor(public ctx: FunctionExpressionContext) {
    super();
    this.args = ctx.argument().map((x) => ({
      name: x.ID()?.text,
      value: getExpressionTree(x.expression()),
    }));
    this.object = getExpressionTree(ctx.expression());
  }
}
