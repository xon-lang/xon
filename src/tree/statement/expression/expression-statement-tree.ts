import { ExpressionStatementContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { SourceRange } from '~/util/source-range';

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
