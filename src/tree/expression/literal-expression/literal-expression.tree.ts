import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { getLiteralTree } from '../../literal/literal-tree.helper';
import { LiteralTree } from '../../literal/literal.tree';
import { ExpressionTree } from '../expression.tree';

export class LiteralExpressionTree extends ExpressionTree {
  public literal: LiteralTree;

  public constructor(public ctx?: LiteralExpressionContext) {
    super();
    if (!ctx) return;

    this.literal = ctx && getLiteralTree(ctx.literal());
  }

  public toString(): string {
    return `${this.literal.toString()}`;
  }
}
