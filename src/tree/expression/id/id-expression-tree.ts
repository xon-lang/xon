import { IdExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { SourceSpan } from '~/util/source/source-span';

export class IdExpressionTree extends ExpressionTree {
  ctx: IdExpressionContext;
  sourceRange: SourceSpan;
  name: IdTree;

  constructor(ctx: IdExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.addChildren(this.name);
  }
}
