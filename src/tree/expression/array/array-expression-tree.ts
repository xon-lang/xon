import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class ArrayExpressionTree extends ExpressionTree {
  ctx: ArrayExpressionContext;
  sourceSpan: SourceSpan;
  parameters: ExpressionTree[];
  openToken: Token;
  closeToken: Token;

  constructor(ctx: ArrayExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const args = ctx.parameters();
    this.parameters = args.expression().map(getExpressionTree);
    this.openToken = Token.from(args.OPEN());
    this.closeToken = Token.from(args.CLOSE());
    this.addChildren(this.openToken, ...this.parameters, this.closeToken);
  }
}
