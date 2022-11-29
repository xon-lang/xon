import { IdExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { TokenTree } from '~/tree/token/token-tree';
import { getTokenTree } from '~/tree/token/token-tree-helper';

export class IdExpressionTree extends ExpressionTree {
  ctx: IdExpressionContext;
  sourceSpan: SourceSpan;
  name: TokenTree;

  constructor(ctx: IdExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = getTokenTree(ctx.ID());
    this.addChildren(this.name);
  }
}
