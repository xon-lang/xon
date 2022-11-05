import { MemberExpressionContext } from '@/grammar/xon-parser';
import { ExpressionTree } from '@/tree/expression/expression-tree';
import { getExpressionTree } from '@/tree/expression/expression-tree-helper';
import { IdTree } from '@/tree/id/id-tree';
import { getIdTree } from '@/tree/id/id-tree-helper';
import { SourceRange } from '@/util/source-range';

export class MemberExpressionTree extends ExpressionTree {
  ctx: MemberExpressionContext;
  sourceRange: SourceRange;
  instance: ExpressionTree;
  name?: IdTree | null;

  constructor(ctx: MemberExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    this.name = getIdTree(ctx._name);
    this.addChildren(this.instance, this.name);
  }
}
