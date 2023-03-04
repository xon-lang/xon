import { InvokeExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class InvokeExpressionTree extends ExpressionTree {
  ctx: InvokeExpressionContext;
  sourceSpan: SourceSpan;
  openToken: Token;
  closeToken: Token;
  instance: ExpressionTree;
  parameters: ExpressionTree[] | null = null;

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const args = ctx.parameters();
    this.openToken = new Token(args.OPEN());
    this.closeToken = new Token(args.CLOSE());
    this.instance = getExpressionTree(ctx.expression());
    this.parameters = args.expression().map(getExpressionTree);

    this.addChildren(this.instance, this.openToken, ...this.parameters, this.closeToken);
  }
}
