import { ExpressionStatementContext } from '~/grammar';
import { ExpressionTree, getExpressionTree, StatementTree } from '~/tree';
import { SourceRange } from '~/util';

export class ExpressionStatementTree extends StatementTree {
  sourceRange: SourceRange;
  expression: ExpressionTree;

  constructor(ctx: ExpressionStatementContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
    this.addChildren(this.expression);
  }
}
