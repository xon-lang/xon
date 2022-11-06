import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTrees } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { SourceRange } from '~/util/source-range';

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
