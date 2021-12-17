import {
  AssertStatementContext,
  AssignmentStatementContext,
  BodyContext,
  ExpressionStatementContext,
  ForStatementContext,
  IfStatementContext,
  PreprocessorStatementContext,
  ReturnStatementContext,
  StatementContext,
  WhileStatementContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { AssertStatementTree } from './assert/assert-statement.tree';
import { AssignmentStatementTree } from './assignment/assignment-statement.tree';
import { ExpressionStatementTree } from './expression/expression-statement.tree';
import { ForStatementTree } from './for/for-statement.tree';
import { IfStatementTree } from './if/if-statement.tree';
import { PreprocessorStatementTree } from './preprocessor/preprocessor-statement.tree';
import { ReturnStatementTree } from './return/return-statement.tree';
import { StatementNode } from './statement-node';
import { WhileStatementTree } from './while/while-statement.tree';

export const getStatementTree = (ctx: StatementContext): StatementNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AssertStatementContext) return new AssertStatementTree(ctx);
  if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementTree(ctx);
  if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
  if (ctx instanceof ForStatementContext) return new ForStatementTree(ctx);
  if (ctx instanceof IfStatementContext) return new IfStatementTree(ctx);
  if (ctx instanceof PreprocessorStatementContext) return new PreprocessorStatementTree(ctx);
  if (ctx instanceof ReturnStatementContext) return new ReturnStatementTree(ctx);
  if (ctx instanceof WhileStatementContext) return new WhileStatementTree(ctx);

  throw Issue.errorFromContext(ctx, `Statement tree not found for '${ctx.constructor.name}'`);
};

export const getStatementsTrees = (contexts: StatementContext[]): StatementNode[] => {
  return contexts?.map(getStatementTree) || [];
};

export const getStatementsFromBody = (body: BodyContext): StatementNode[] => {
  return getStatementsTrees(body?.statement());
};
