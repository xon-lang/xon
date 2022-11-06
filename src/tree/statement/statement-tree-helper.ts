import {
  AssertStatementContext,
  CommentStatementContext,
  DeclarationStatementContext,
  ExportStatementContext,
  ExpressionStatementContext,
  ForStatementContext,
  IfStatementContext,
  ReturnStatementContext,
  StatementContext,
  WhileStatementContext,
} from '~/grammar';
import { Issue } from '~/issue';
import {
  AssertStatementTree,
  CommentStatementTree,
  DeclarationStatementTree,
  ExportStatementTree,
  ExpressionStatementTree,
  ForStatementTree,
  IfStatementTree,
  ReturnStatementTree,
  StatementTree,
  WhileStatementTree,
} from '~/tree';

export function getStatementTree(ctx?: StatementContext | null): StatementTree | null {
  if (!ctx) return null;

  if (ctx instanceof AssertStatementContext) return new AssertStatementTree(ctx);
  if (ctx instanceof DeclarationStatementContext) return new DeclarationStatementTree(ctx);
  if (ctx instanceof ExportStatementContext) return new ExportStatementTree(ctx);
  if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
  if (ctx instanceof ForStatementContext) return new ForStatementTree(ctx);
  if (ctx instanceof IfStatementContext) return new IfStatementTree(ctx);
  if (ctx instanceof ReturnStatementContext) return new ReturnStatementTree(ctx);
  if (ctx instanceof WhileStatementContext) return new WhileStatementTree(ctx);
  if (ctx instanceof CommentStatementContext) return new CommentStatementTree(ctx);

  Issue.errorFromContext(ctx, `Statement tree not found for '${ctx.constructor.name}'`);
}

export function getStatementTrees(statements: StatementContext[]): StatementTree[] {
  return statements?.map(getStatementTree) || [];
}
