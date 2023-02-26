import { InvokeExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTree } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class InvokeExpressionTree extends ExpressionTree {
  ctx: InvokeExpressionContext;
  sourceSpan: SourceSpan;
  openToken: Token;
  closeToken: Token;
  instance: ExpressionTree;
  arguments: ArgumentTree[] | null = null;

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const args = ctx.arguments();
    this.openToken = new Token(args.OPEN());
    this.closeToken = new Token(args.CLOSE());
    this.instance = getExpressionTree(ctx.expression());
    this.arguments = args.argument().map(getArgumentTree);

    this.addChildren(this.instance, this.openToken, ...this.arguments, this.closeToken);
  }
}
