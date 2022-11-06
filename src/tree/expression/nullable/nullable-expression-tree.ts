import { NullableExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceRange } from '~/util/source-range';

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
