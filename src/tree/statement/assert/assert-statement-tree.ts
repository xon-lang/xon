import { AssertStatementContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { SourceRange } from '~/util/source-range';

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
