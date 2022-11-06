import { InvokeExpressionContext } from '~/grammar/xon-parser';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTrees } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { SourceRange } from '~/util/source-range';

export class InvokeExpressionTree extends ExpressionTree {
  ctx: InvokeExpressionContext;
  sourceRange: SourceRange;
  instance: ExpressionTree;
  arguments: ArgumentTree[];
  open: IdTree;
  close: IdTree;

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    this.arguments = getArgumentTrees(ctx.arguments().argument());
    this.open = getIdTree(ctx.arguments().open()._name);
    this.close = getIdTree(ctx.arguments().close()._name);
    this.addChildren(this.instance, ...this.arguments);
  }
}
