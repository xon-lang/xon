import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { TokenTree } from '~/tree/token';

export class ArrayExpressionTree extends ExpressionTree {
  parameters: ExpressionTree[];
  openToken: TokenTree;
  closeToken: TokenTree;

  constructor(ctx: ArrayExpressionContext) {
    super(SourceSpan.fromContext(ctx));
    this.parameters = ctx.expression().map(getExpressionTree);
    this.openToken = TokenTree.from(ctx.OPEN());
    this.closeToken = TokenTree.from(ctx.CLOSE());
    this.addChildren(this.openToken, ...this.parameters, this.closeToken);
  }
}
