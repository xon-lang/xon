import { ArrayExpressionContext } from '~/grammar';
import { ArgumentTree, ExpressionTree, getArgumentTrees } from '~/tree';
import { SourceRange } from '~/util';

export class ArrayExpressionTree extends ExpressionTree {
  ctx: ArrayExpressionContext;
  sourceRange: SourceRange;
  arguments: ArgumentTree[];

  constructor(ctx: ArrayExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.arguments = getArgumentTrees(ctx.arguments().argument());
    this.addChildren(...this.arguments);
  }
}
