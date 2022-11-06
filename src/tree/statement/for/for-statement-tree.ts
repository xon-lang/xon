import { ForStatementContext } from '~/grammar';
import { DeclarationTree, ExpressionTree, getDeclarationTree, getExpressionTree, getSourceTree, SourceTree, StatementTree } from '~/tree';
import { SourceRange } from '~/util';

export class ForStatementTree extends StatementTree {
  ctx: ForStatementContext;
  sourceRange: SourceRange;
  parameter?: DeclarationTree;
  expression: ExpressionTree;
  body: SourceTree;

  constructor(ctx: ForStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.parameter = getDeclarationTree(ctx.declaration());
    this.expression = getExpressionTree(ctx.expression());
    this.body = getSourceTree(ctx.body().source());
    this.addChildren(this.parameter, this.expression, this.body);
  }
}
