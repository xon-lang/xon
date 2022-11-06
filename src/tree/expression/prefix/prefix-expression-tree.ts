import { PrefixExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { SourceRange } from '~/util/source-range';

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
