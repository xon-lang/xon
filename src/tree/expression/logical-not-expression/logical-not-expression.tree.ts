import { LogicalNotExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LogicalNotExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public constructor(public ctx?: LogicalNotExpressionContext) {
    super();
    if (!ctx) return;

    this.value = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    return `not ${this.value.toString()}`;
  }
}
