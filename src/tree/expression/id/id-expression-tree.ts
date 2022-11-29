import { IdExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';

export class IdExpressionTree extends ExpressionTree {
  ctx: IdExpressionContext;
  sourceSpan: SourceSpan;
  name: IdTree;

  constructor(ctx: IdExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = getIdTree(ctx.ID());
    this.addChildren(this.name);
  }
}
