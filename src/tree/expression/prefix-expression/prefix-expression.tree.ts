import { ExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class PrefixExpressionTree extends ExpressionTree {
  public constructor(
    public ctx: ExpressionContext,
    public operator: string,
    public value: ExpressionTree,
  ) {
    super();
  }

  public toString(): string {
    return `${this.operator}${this.value.toString()}`;
  }
}
