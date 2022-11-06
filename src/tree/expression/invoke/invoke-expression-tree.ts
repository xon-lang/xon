import { InvokeExpressionContext } from '~/grammar';
import {
  ArgumentTree,
  ExpressionTree,
  getArgumentTrees,
  getExpressionTree,
  getIdTree,
  IdTree,
} from '~/tree';
import { SourceRange } from '~/util';

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
