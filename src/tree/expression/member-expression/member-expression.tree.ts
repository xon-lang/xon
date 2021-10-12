import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
  public name: string;

  public instance: ExpressionTree;

  public constructor(public ctx?: MemberExpressionContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.instance = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    return `${this.instance.toString()}${this.name}`;
  }
}
