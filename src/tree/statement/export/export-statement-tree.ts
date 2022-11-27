import { ExportStatementContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { SourceSpan } from '~/util/source/source-span';

export class ExportStatementTree extends StatementTree {
  ctx: ExportStatementContext;
  sourceRange: SourceSpan;
  path: ExpressionTree;

  constructor(ctx: ExportStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.path = getExpressionTree(ctx._path);
    this.addChildren(this.path);
  }
}
