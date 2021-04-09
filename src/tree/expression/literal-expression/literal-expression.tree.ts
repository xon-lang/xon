import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { getLiteralTree } from '../../literal/literal-helper';
import { LiteralTree } from '../../literal/literal.tree';
import { ExpressionTree } from '../expression.tree';

export class LiteralExpressionTree extends ExpressionTree {
  public literal: LiteralTree;

  public constructor(public ctx?: LiteralExpressionContext) {
    super();
    this.literal = ctx && getLiteralTree(ctx.literal());
  }
}
