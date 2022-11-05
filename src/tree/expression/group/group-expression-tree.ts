import { GroupExpressionContext } from '@/grammar/xon-parser';
import { ExpressionTree } from '@/tree/expression/expression-tree';
import { getExpressionTree } from '@/tree/expression/expression-tree-helper';
import { SourceRange } from '@/util/source-range';

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

