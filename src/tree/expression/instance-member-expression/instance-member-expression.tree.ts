import { InstanceMemberExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class InstanceMemberExpressionTree extends ExpressionTree {
  public name: string;

  public constructor(public ctx: InstanceMemberExpressionContext) {
    super();
    this.name = ctx.ID().text;
  }
}
