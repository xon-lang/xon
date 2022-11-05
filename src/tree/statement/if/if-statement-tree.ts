import { IfStatementContext } from '@/grammar/xon-parser';
import { ExpressionTree } from '@/tree/expression/expression-tree';
import { getExpressionTree } from '@/tree/expression/expression-tree-helper';
import { SourceTree } from '@/tree/source/source-tree';
import { getSourceTree } from '@/tree/source/source-tree-helper';
import { StatementTree } from '@/tree/statement/statement-tree';
import { SourceRange } from '@/util/source-range';

export class IfStatementTree extends StatementTree {
  ctx: IfStatementContext;
  sourceRange: SourceRange;
  condition: ExpressionTree;
  thenBody: SourceTree;
  elseBody?: SourceTree | null;

  constructor(ctx: IfStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.condition = getExpressionTree(ctx.expression());
    this.thenBody = getSourceTree(ctx._thenBody.source());
    this.elseBody = getSourceTree(ctx._elseBody?.source());
    this.addChildren(this.condition, this.thenBody, this.elseBody);
  }
}
