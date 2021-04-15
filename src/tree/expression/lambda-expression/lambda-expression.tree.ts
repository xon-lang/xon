import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  public parameters: string[];

  public body: ExpressionTree;

  public constructor(public ctx?: LambdaExpressionContext) {
    super();
    if (!ctx) return;

    this.parameters = ctx.id().map((x) => x.text);
    this.body = getExpressionTree(ctx.expression());
  }
}
