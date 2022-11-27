import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTrees } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { SourceSpan } from '~/util/source/source-span';

export class ArrayExpressionTree extends ExpressionTree {
  ctx: ArrayExpressionContext;
  sourceRange: SourceSpan;
  arguments: ArgumentTree[];

  constructor(ctx: ArrayExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.arguments = getArgumentTrees(ctx.arguments().argument());
    this.addChildren(...this.arguments);
  }
}
