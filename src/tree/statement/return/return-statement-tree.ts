import { ReturnStatementContext } from '~/grammar';
import { ExpressionTree, getExpressionTree, StatementTree } from '~/tree';
import { SourceRange } from '~/util';

export class ReturnStatementTree extends StatementTree {
  ctx: ReturnStatementContext;
  sourceRange: SourceRange;
  value?: ExpressionTree | null;

  constructor(ctx: ReturnStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = ctx.expression() && getExpressionTree(ctx.expression());
    this.addChildren(this.value);
  }
}
