import { MemberExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';

export class MemberExpressionTree extends ExpressionTree {
  ctx: MemberExpressionContext;
  sourceSpan: SourceSpan;
  instance: ExpressionTree;
  name: IdTree | null;

  constructor(ctx: MemberExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    const id = ctx.ID() ?? null;
    this.name = id && getIdTree(id);
    this.addChildren(this.instance, this.name);
  }
}
