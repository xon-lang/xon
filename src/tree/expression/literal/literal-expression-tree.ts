import { LiteralExpressionContext } from '~/grammar';
import { ExpressionTree, getLiteralTree, LiteralTree } from '~/tree';
import { SourceRange } from '~/util';

export class LiteralExpressionTree extends ExpressionTree {
  ctx: LiteralExpressionContext;
  sourceRange: SourceRange;
  literal: LiteralTree;

  constructor(ctx: LiteralExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.literal = ctx && getLiteralTree(ctx.literal());
    this.addChildren(this.literal);
  }
}
