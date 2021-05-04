import { InstanceExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class InstanceExpressionTree extends ExpressionTree {
  public name: string;

  public constructor(public ctx?: InstanceExpressionContext) {
    super();
    if (!ctx) return;

    this.name = ctx.THIS().text;
  }

  public toString(): string {
    return `${this.name}`;
  }
}
