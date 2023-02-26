import {
  CommentStatementContext,
  DeclarationStatementContext,
  ExpressionStatementContext,
  StatementContext,
} from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { CommentStatementTree } from '~/tree/statement/comment/comment-statement-tree';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { ExpressionStatementTree } from '~/tree/statement/expression/expression-statement-tree';
import { StatementTree } from '~/tree/statement/statement-tree';

export function getStatementTree(ctx: StatementContext): StatementTree {
  if (ctx instanceof DeclarationStatementContext) return new DeclarationStatementTree(ctx);
  if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
  if (ctx instanceof CommentStatementContext) return new CommentStatementTree(ctx);

  Issue.errorFromContext(ctx, `Statement tree not found for '${ctx.constructor.name}'`);
}

export const isDeclarationStatement = (statement: StatementTree): statement is DeclarationStatementTree =>
  statement instanceof DeclarationStatementTree;
