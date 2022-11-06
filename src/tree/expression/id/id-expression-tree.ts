import { IdExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { SourceRange } from '~/util/source-range';

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
