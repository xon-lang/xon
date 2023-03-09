import { UnexpectedExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { TokenTree } from '~/tree/token';

export class UnexpectedExpressionTree extends ExpressionTree {
  value: TokenTree;

  constructor(ctx: UnexpectedExpressionContext) {
    super(SourceSpan.fromContext(ctx));
    this.value = TokenTree.from(ctx.UNEXPECTED());
    this.addChildren(this.value);
  }
}
