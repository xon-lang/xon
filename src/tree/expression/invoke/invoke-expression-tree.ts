import { InvokeExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTrees } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { TokenTree } from '~/tree/token/token-tree';
import { getTokenTree } from '~/tree/token/token-tree-helper';

export class InvokeExpressionTree extends ExpressionTree {
  ctx: InvokeExpressionContext;
  sourceSpan: SourceSpan;
  instance: ExpressionTree;
  arguments: ArgumentTree[];
  open: TokenTree;
  close: TokenTree;

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    this.arguments = getArgumentTrees(ctx.arguments().argument());
    this.open = getTokenTree(ctx.arguments().open()._name);
    this.close = getTokenTree(ctx.arguments().close()._name);
    this.addChildren(this.instance, ...this.arguments);
  }
}
