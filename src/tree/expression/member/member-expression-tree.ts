import { MemberExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { TokenTree } from '~/tree/token/token-tree';
import { getTokenTree } from '~/tree/token/token-tree-helper';

export class MemberExpressionTree extends ExpressionTree {
  ctx: MemberExpressionContext;
  sourceSpan: SourceSpan;
  instance: ExpressionTree;
  name: TokenTree | null;

  constructor(ctx: MemberExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());
    const id = ctx.ID() ?? null;
    this.name = id && getTokenTree(id);
    this.addChildren(this.instance, this.name);
  }
}
