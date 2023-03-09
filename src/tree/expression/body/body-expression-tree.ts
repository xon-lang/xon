import { BodyExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';

export class BodyExpressionTree extends ExpressionTree {
  public source: SourceTree;

  constructor(ctx: BodyExpressionContext) {
    super(SourceSpan.fromContext(ctx));
    this.source = getSourceTree(ctx.source());
    this.addChildren(this.source);
  }
}
