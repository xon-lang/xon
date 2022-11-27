import { PrefixExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { SourceSpan } from '~/util/source/source-span';

export class PrefixExpressionTree extends ExpressionTree {
  ctx: PrefixExpressionContext;
  sourceRange: SourceSpan;
  name: IdTree;
  value: ExpressionTree;

  constructor(ctx: PrefixExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.name, this.value);
  }
}
