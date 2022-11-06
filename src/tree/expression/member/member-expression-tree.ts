import { MemberExpressionContext } from '~/grammar';
import { ExpressionTree, getExpressionTree, getIdTree, IdTree } from '~/tree';
import { SourceRange } from '~/util';

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
