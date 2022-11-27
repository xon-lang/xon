import { IfStatementContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';

export class IfStatementTree extends StatementTree {
  ctx: IfStatementContext;
  sourceSpan: SourceSpan;
  condition: ExpressionTree;
  thenBody: SourceTree;
  elseBody: SourceTree | null;

  constructor(ctx: IfStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.condition = getExpressionTree(ctx.expression());
    this.thenBody = getSourceTree(ctx._thenBody.source());
    this.elseBody = (ctx._elseBody && getSourceTree(ctx._elseBody.source())) ?? null;
    this.addChildren(this.condition, this.thenBody, this.elseBody);
  }
}
