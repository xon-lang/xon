import { MemberExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { SourceSpan } from '~/util/source/source-span';

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
    this.name = (ctx._name && getIdTree(ctx._name)) || null;
    this.addChildren(this.instance, this.name);
  }
}
