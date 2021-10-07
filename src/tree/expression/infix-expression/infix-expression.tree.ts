import { ExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class InfixExpressionTree extends ExpressionTree {
  public constructor(
    public ctx: ExpressionContext,
    public operator: string,
    public left: ExpressionTree,
    public right: ExpressionTree,
  ) {
    super();
  }

  public toString(): string {
    return `${this.left.toString()} ${this.operator} ${this.right.toString()}`;
  }
}
