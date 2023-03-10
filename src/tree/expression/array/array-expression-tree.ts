import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { TokenTree } from '~/tree/token';

export class ArrayExpressionTree extends ExpressionTree {
  constructor(public openToken: TokenTree, public parameters: ExpressionTree[], public closeToken: TokenTree) {
    super(SourceSpan.fromTwoTrees(openToken, closeToken));
    this.addChildren(this.openToken, ...this.parameters, this.closeToken);
  }
}

export function getArrayExpressionTree(ctx: ArrayExpressionContext) {
  const parameters = ctx.expression().map(getExpressionTree);
  const openToken = TokenTree.from(ctx.OPEN());
  const closeToken = TokenTree.from(ctx.CLOSE());
  return new ArrayExpressionTree(openToken, parameters, closeToken);
}
