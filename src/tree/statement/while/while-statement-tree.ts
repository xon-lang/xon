import { WhileStatementContext } from '~/grammar';
import {
  ExpressionTree,
  getExpressionTree,
  getSourceTree,
  SourceTree,
  StatementTree,
} from '~/tree';
import { SourceRange } from '~/util';

export class WhileStatementTree extends StatementTree {
  ctx: WhileStatementContext;
  sourceRange: SourceRange;
  expression: ExpressionTree;
  body: SourceTree;

  constructor(ctx: WhileStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
    this.body = getSourceTree(ctx.body().source());
    this.addChildren(this.expression, this.body);
  }
}
