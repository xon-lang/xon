import { InvokeExpressionContext } from '~/grammar/xon-parser';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTrees } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { SourceSpan } from '~/util/source/source-span';

export class InvokeExpressionTree extends ExpressionTree {
  ctx: InvokeExpressionContext;
  sourceSpan: SourceSpan;
  instance: ExpressionTree;
  arguments: ArgumentTree[];
  open: IdTree;
  close: IdTree;

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    this.arguments = getArgumentTrees(ctx.arguments().argument());
    this.open = getIdTree(ctx.arguments().open()._name);
    this.close = getIdTree(ctx.arguments().close()._name);
    this.addChildren(this.instance, ...this.arguments);
  }
}
