import { ExportStatementContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';

export class ExportStatementTree extends StatementTree {
  ctx: ExportStatementContext;
  sourceSpan: SourceSpan;
  path: ExpressionTree | null;

  constructor(ctx: ExportStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const expression = ctx.expression() ?? null;
    this.path = expression && getExpressionTree(expression);
    this.addChildren(this.path);
  }
}
