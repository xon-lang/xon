import { LiteralExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { LiteralTree } from '~/tree/literal/literal-tree';
import { getLiteralTree } from '~/tree/literal/literal-tree-helper';
import { SourceSpan } from '~/util/source/source-span';

export class LiteralExpressionTree extends ExpressionTree {
  ctx: LiteralExpressionContext;
  sourceRange: SourceSpan;
  literal: LiteralTree;

  constructor(ctx: LiteralExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.literal = getLiteralTree(ctx.literal());
    this.addChildren(this.literal);
  }
}
