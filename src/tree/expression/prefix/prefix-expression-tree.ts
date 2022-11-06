import { PrefixExpressionContext } from '~/grammar';
import { ExpressionTree, getExpressionTree, getIdTree, IdTree } from '~/tree';
import { SourceRange } from '~/util';

export class PrefixExpressionTree extends ExpressionTree {
  ctx: PrefixExpressionContext;
  sourceRange: SourceRange;
  name: IdTree;
  value: ExpressionTree;

  constructor(ctx: PrefixExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._op);
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.name, this.value);
  }
}
