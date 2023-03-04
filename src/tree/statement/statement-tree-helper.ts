import { CommentStatementContext, ExpressionStatementContext, StatementContext } from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { CommentStatementTree } from '~/tree/statement/comment/comment-statement-tree';
import { ExpressionStatementTree } from '~/tree/statement/expression/expression-statement-tree';
import { StatementTree } from '~/tree/statement/statement-tree';

export function getStatementTree(ctx: StatementContext): StatementTree {
  if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
  if (ctx instanceof CommentStatementContext) return new CommentStatementTree(ctx);

  Issue.errorFromContext(ctx, `Statement tree not found for '${ctx.constructor.name}'`);
}
