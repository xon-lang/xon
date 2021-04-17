import { NegativeExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class NegativeExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public constructor(public ctx?: NegativeExpressionContext) {
    super();
    if (!ctx) return;

    this.value = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    return `-${this.value.toString()}`;
  }
}
