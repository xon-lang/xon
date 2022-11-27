import { ExpressionStatementContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';

export class ExpressionStatementTree extends StatementTree {
  sourceSpan: SourceSpan;
  expression: ExpressionTree;

  constructor(ctx: ExpressionStatementContext) {
    super();
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
    this.addChildren(this.expression);
  }
}
