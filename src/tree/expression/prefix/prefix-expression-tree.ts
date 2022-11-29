import { PrefixExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { TokenTree } from '~/tree/token/token-tree';
import { getTokenTree } from '~/tree/token/token-tree-helper';

export class PrefixExpressionTree extends ExpressionTree {
  ctx: PrefixExpressionContext;
  sourceSpan: SourceSpan;
  name: TokenTree;
  value: ExpressionTree;

  constructor(ctx: PrefixExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = getTokenTree(ctx.OP());
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.name, this.value);
  }
}
