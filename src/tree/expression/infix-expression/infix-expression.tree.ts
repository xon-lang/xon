import { ExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class InfixExpressionTree extends ExpressionTree {
  public constructor(
    public ctx: ExpressionContext,
    public name: string,
    public left: ExpressionTree,
    public right: ExpressionTree,
  ) {
    super();
  }

  public toString(): string {
    return `${this.left.toString()} ${this.name} ${this.right.toString()}`;
  }
}
