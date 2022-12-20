import {
  AssertStatementContext,
  CommentStatementContext,
  DeclarationStatementContext,
  ExportStatementContext,
  ExpressionStatementContext,
  ForStatementContext,
  IfStatementContext,
  ImportStatementContext,
  ReturnStatementContext,
  StatementContext,
  WhileStatementContext,
} from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { AssertStatementTree } from '~/tree/statement/assert/assert-statement-tree';
import { CommentStatementTree } from '~/tree/statement/comment/comment-statement-tree';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { ExportStatementTree } from '~/tree/statement/export/export-statement-tree';
import { ExpressionStatementTree } from '~/tree/statement/expression/expression-statement-tree';
import { ForStatementTree } from '~/tree/statement/for/for-statement-tree';
import { IfStatementTree } from '~/tree/statement/if/if-statement-tree';
import { ImportStatementTree } from '~/tree/statement/import/import-statement-tree';
import { ReturnStatementTree } from '~/tree/statement/return/return-statement-tree';
import { StatementTree } from '~/tree/statement/statement-tree';
import { WhileStatementTree } from '~/tree/statement/while/while-statement-tree';

export function getStatementTree(ctx: StatementContext): StatementTree {
  if (ctx instanceof AssertStatementContext) return new AssertStatementTree(ctx);
  if (ctx instanceof DeclarationStatementContext) return new DeclarationStatementTree(ctx);
  if (ctx instanceof ExportStatementContext) return new ExportStatementTree(ctx);
  if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
  if (ctx instanceof ForStatementContext) return new ForStatementTree(ctx);
  if (ctx instanceof IfStatementContext) return new IfStatementTree(ctx);
  if (ctx instanceof ImportStatementContext) return new ImportStatementTree(ctx);
  if (ctx instanceof ReturnStatementContext) return new ReturnStatementTree(ctx);
  if (ctx instanceof WhileStatementContext) return new WhileStatementTree(ctx);
  if (ctx instanceof CommentStatementContext) return new CommentStatementTree(ctx);

  Issue.errorFromContext(ctx, `Statement tree not found for '${ctx.constructor.name}'`);
}

export const isDeclarationStatement = (statement: StatementTree): statement is DeclarationStatementTree =>
  statement instanceof DeclarationStatementTree;
