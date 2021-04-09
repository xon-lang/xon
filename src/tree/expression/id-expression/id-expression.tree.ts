import { IdExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  public name: string;

  public constructor(public ctx: IdExpressionContext) {
    super();

    this.name = ctx.id().text;
  }
}
