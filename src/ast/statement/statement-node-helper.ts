import {
  AssertStatementContext,
  AssignmentStatementContext,
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
import { AssertStatementNode } from './assert/assert-statement-node';
import { AssignmentStatementNode } from './assignment/assignment-statement-node';
import { ExportStatementNode } from './export/export-statement-node';
import { ExpressionStatementNode } from './expression/expression-statement-node';
import { ForStatementNode } from './for/for-statement-node';
import { IfStatementNode } from './if/if-statement-node';
import { ImportStatementNode } from './import/import-statement-node';
import { PreprocessorStatementNode } from './preprocessor/preprocessor-statement-node';
import { ReturnStatementNode } from './return/return-statement-node';
import { StatementNode } from './statement-node';
import { WhileStatementNode } from './while/while-statement-node';

export const getStatementNode = (ctx: StatementContext): StatementNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AssertStatementContext) return new AssertStatementNode(ctx);
  if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementNode(ctx);
  if (ctx instanceof ExportStatementContext) return new ExportStatementNode(ctx);
  if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementNode(ctx);
  if (ctx instanceof ForStatementContext) return new ForStatementNode(ctx);
  if (ctx instanceof IfStatementContext) return new IfStatementNode(ctx);
  if (ctx instanceof ImportStatementContext) return new ImportStatementNode(ctx);
  if (ctx instanceof PreprocessorStatementContext) return new PreprocessorStatementNode(ctx);
  if (ctx instanceof ReturnStatementContext) return new ReturnStatementNode(ctx);
  if (ctx instanceof WhileStatementContext) return new WhileStatementNode(ctx);

  throw Issue.errorFromContext(ctx, `Statement node not found for '${ctx.constructor.name}'`);
};

export const getStatementNodes = (contexts: StatementContext[]): StatementNode[] => {
  return contexts?.map(getStatementNode) || [];
};
