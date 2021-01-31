import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  args: string[];

  body: ExpressionTree;

  constructor(public ctx: LambdaExpressionContext) {
    super();
    this.args = ctx.ID().map((x) => x.text);
    this.body = getExpressionTree(ctx.expression());
  }
}
