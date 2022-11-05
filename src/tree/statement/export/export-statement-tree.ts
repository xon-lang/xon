import { ExportStatementContext } from '@/grammar/xon-parser';
import { ExpressionTree } from '@/tree/expression/expression-tree';
import { getExpressionTree } from '@/tree/expression/expression-tree-helper';
import { StatementTree } from '@/tree/statement/statement-tree';
import { SourceRange } from '@/util/source-range';

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
