import { GroupExpressionContext } from '~/grammar';
import { ExpressionTree, getExpressionTree } from '~/tree';
import { SourceRange } from '~/util';

export class GroupExpressionTree extends ExpressionTree {
  ctx: GroupExpressionContext;
  sourceRange: SourceRange;
  expression: ExpressionTree;

  constructor(ctx: GroupExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
    this.addChildren(this.expression);
  }
}
