import { IdExpressionContext } from '~/grammar';
import { ExpressionTree, getIdTree, IdTree } from '~/tree';
import { SourceRange } from '~/util';

export class IdExpressionTree extends ExpressionTree {
  ctx: IdExpressionContext;
  sourceRange: SourceRange;
  name: IdTree;

  constructor(ctx: IdExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.addChildren(this.name);
  }
}
