import { ExportStatementContext } from '~/grammar';
import { ExpressionTree, getExpressionTree, StatementTree } from '~/tree';
import { SourceRange } from '~/util';

export class ExportStatementTree extends StatementTree {
  ctx: ExportStatementContext;
  sourceRange: SourceRange;
  path: ExpressionTree;

  constructor(ctx: ExportStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.path = getExpressionTree(ctx._path);
    this.addChildren(this.path);
  }
}
