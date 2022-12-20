import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTree } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { Token } from '~/tree/token';

export class ArrayExpressionTree extends ExpressionTree {
  ctx: ArrayExpressionContext;
  sourceSpan: SourceSpan;
  arguments: ArgumentTree[];
  openToken: Token;
  closeToken: Token;

  constructor(ctx: ArrayExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const args = ctx.arguments();
    this.arguments = args.argument().map(getArgumentTree);
    this.openToken = Token.from(args.OPEN());
    this.closeToken = Token.from(args.CLOSE());
    this.addChildren(...this.arguments);
  }
}
