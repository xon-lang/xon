import { WhileStatementContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { SourceSpan } from '~/util/source/source-span';

export class WhileStatementTree extends StatementTree {
  ctx: WhileStatementContext;
  sourceSpan: SourceSpan;
  expression: ExpressionTree;
  body: SourceTree;

  constructor(ctx: WhileStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
    this.body = getSourceTree(ctx.body().source());
    this.addChildren(this.expression, this.body);
  }
}
