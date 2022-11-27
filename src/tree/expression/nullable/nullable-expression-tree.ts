import { NullableExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';

export class NullableExpressionTree extends ExpressionTree {
  ctx: NullableExpressionContext;
  sourceSpan: SourceSpan;
  value: ExpressionTree;

  constructor(ctx: NullableExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.value);
  }
}
