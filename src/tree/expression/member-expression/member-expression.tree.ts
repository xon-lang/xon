import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
  public name: string;

  public object: ExpressionTree;

  public constructor(public ctx?: MemberExpressionContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.object = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    const object = this.object.toString();
    return `${object}${this.name}`;
  }
}
