import { LiteralExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { LiteralTree } from '~/tree/literal/literal-tree';
import { getLiteralTree } from '~/tree/literal/literal-tree-helper';
import { SourceRange } from '~/util/source-range';

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
