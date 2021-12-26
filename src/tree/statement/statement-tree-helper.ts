import {
  AssertStatementContext,
  AssignmentStatementContext,
  DeclarationStatementContext,
  ExportStatementContext,
  ExpressionStatementContext,
  ForStatementContext,
  IfStatementContext,
  ImportStatementContext,
  PreprocessorStatementContext,
  ReturnStatementContext,
  StatementContext,
  WhileStatementContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { AssertStatementTree } from './assert/assert-statement-tree';
import { AssignmentStatementTree } from './assignment/assignment-statement-tree';
import { DeclarationStatementTree } from './declaration/declaration-statement-tree';
import { ExportStatementTree } from './export/export-statement-tree';
import { ExpressionStatementTree } from './expression/expression-statement-tree';
import { ForStatementTree } from './for/for-statement-tree';
import { IfStatementTree } from './if/if-statement-tree';
import { ImportStatementTree } from './import/import-statement-tree';
import { PreprocessorStatementTree } from './preprocessor/preprocessor-statement-tree';
import { ReturnStatementTree } from './return/return-statement-tree';
import { StatementTree } from './statement-tree';
import { WhileStatementTree } from './while/while-statement-tree';

export const getStatementTree = (ctx: StatementContext): StatementTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AssertStatementContext) return new AssertStatementTree(ctx);
  if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementTree(ctx);
  if (ctx instanceof DeclarationStatementContext) return new DeclarationStatementTree(ctx);
  if (ctx instanceof ExportStatementContext) return new ExportStatementTree(ctx);
  if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
  if (ctx instanceof ForStatementContext) return new ForStatementTree(ctx);
  if (ctx instanceof IfStatementContext) return new IfStatementTree(ctx);
  if (ctx instanceof ImportStatementContext) return new ImportStatementTree(ctx);
  if (ctx instanceof PreprocessorStatementContext) return new PreprocessorStatementTree(ctx);
  if (ctx instanceof ReturnStatementContext) return new ReturnStatementTree(ctx);
  if (ctx instanceof WhileStatementContext) return new WhileStatementTree(ctx);

  Issue.errorFromContext(ctx, `Statement node not found for '${ctx.constructor.name}'`);
};

export const getStatementTrees = (contexts: StatementContext[]): StatementTree[] => {
  return contexts?.map(getStatementTree) || [];
};
