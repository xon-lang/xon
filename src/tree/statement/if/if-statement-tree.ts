import { IfStatementContext } from '~/grammar';
import {
  ExpressionTree,
  getExpressionTree,
  getSourceTree,
  SourceTree,
  StatementTree,
} from '~/tree';
import { SourceRange } from '~/util';

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
