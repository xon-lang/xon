import { GroupExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceSpan } from '~/util/source/source-span';

export class GroupExpressionTree extends ExpressionTree {
  ctx: GroupExpressionContext;
  sourceRange: SourceSpan;
  expression: ExpressionTree;

  constructor(ctx: GroupExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
    this.addChildren(this.expression);
  }
}
