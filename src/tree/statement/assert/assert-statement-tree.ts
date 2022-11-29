import { AssertStatementContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';

export class AssertStatementTree extends StatementTree {
  ctx: AssertStatementContext;
  sourceSpan: SourceSpan;
  actualExpression: ExpressionTree;
  expectExpression: ExpressionTree;

  constructor(ctx: AssertStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const [actual, expect] = ctx.expression();
    this.actualExpression = getExpressionTree(actual);
    this.expectExpression = getExpressionTree(expect);
    this.addChildren(this.actualExpression, this.expectExpression);
  }
}
