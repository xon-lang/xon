import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
  public object: ExpressionTree;

  public name: string;

  public constructor(public ctx?: MemberExpressionContext) {
    super();
    if (!ctx) return;

    this.object = getExpressionTree(ctx.expression());
    this.name = ctx.id().text;
  }
}
