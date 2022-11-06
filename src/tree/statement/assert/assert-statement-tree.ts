import { AssertStatementContext } from '~/grammar';
import { ExpressionTree, getExpressionTree, StatementTree } from '~/tree';
import { SourceRange } from '~/util';

export class AssertStatementTree extends StatementTree {
  ctx: AssertStatementContext;
  sourceRange: SourceRange;
  actualExpression: ExpressionTree;
  expectExpression: ExpressionTree;

  constructor(ctx: AssertStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.actualExpression = getExpressionTree(ctx.expression(0));
    this.expectExpression = getExpressionTree(ctx.expression(1));
    this.addChildren(this.actualExpression, this.expectExpression);
  }
}
