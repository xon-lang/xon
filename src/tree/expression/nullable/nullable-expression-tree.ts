import { NullableExpressionContext } from '~/grammar';
import { ExpressionTree, getExpressionTree } from '~/tree';
import { SourceRange } from '~/util';

export class NullableExpressionTree extends ExpressionTree {
  ctx: NullableExpressionContext;
  sourceRange: SourceRange;
  value: ExpressionTree;

  constructor(ctx: NullableExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.value);
  }
}
