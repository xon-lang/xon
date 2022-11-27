import { IfStatementContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { SourceSpan } from '~/util/source/source-span';


export class IfStatementTree extends StatementTree {
  ctx: IfStatementContext;
  sourceRange: SourceSpan;
  condition: ExpressionTree;
  thenBody: SourceTree;
  elseBody: SourceTree | null;

  constructor(ctx: IfStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.condition = getExpressionTree(ctx.expression());
    this.thenBody = getSourceTree(ctx._thenBody.source());
    this.elseBody = (ctx._elseBody && getSourceTree(ctx._elseBody.source())) ?? null;
    this.addChildren(this.condition, this.thenBody, this.elseBody);
  }
}
