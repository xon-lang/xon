import { UnexpectedExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { TokenTree } from '~/tree/token';

export class UnexpectedExpressionTree extends ExpressionTree {
  tokens: TokenTree[];

  constructor(ctx: UnexpectedExpressionContext) {
    super(SourceSpan.fromContext(ctx));
    this.tokens = ctx.UNEXPECTED().map((token) => TokenTree.from(token));
    this.addChildren(...this.tokens);
  }
}
