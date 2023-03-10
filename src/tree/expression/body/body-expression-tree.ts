import { BodyExpressionContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';

export class BodyExpressionTree extends ExpressionTree {
  constructor(public source: SourceTree) {
    super(source.sourceSpan);
    this.addChildren(this.source);
  }
}

export function getBodyExpressionTree(ctx: BodyExpressionContext) {
  const source = getSourceTree(ctx.source());
  return new BodyExpressionTree(source);
}
