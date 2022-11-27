import { AssertStatementContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { SourceSpan } from '~/util/source/source-span';

export class AssertStatementTree extends StatementTree {
  ctx: AssertStatementContext;
  sourceRange: SourceSpan;
  actualExpression: ExpressionTree;
  expectExpression: ExpressionTree;

  constructor(ctx: AssertStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.actualExpression = getExpressionTree(ctx.expression(0));
    this.expectExpression = getExpressionTree(ctx.expression(1));
    this.addChildren(this.actualExpression, this.expectExpression);
  }
}
