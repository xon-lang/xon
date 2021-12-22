import {
  AssertStatementContext,
  AssignmentStatementContext,
  ExpressionStatementContext,
  ForStatementContext,
  IfStatementContext,
  PreprocessorStatementContext,
  ReturnStatementContext,
  StatementContext,
  WhileStatementContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { AssertStatementNode } from './assert/assert-statement-node';
import { AssignmentStatementNode } from './assignment/assignment-statement-node';
import { ExpressionStatementNode } from './expression/expression-statement-node';
import { ForStatementNode } from './for/for-statement-node';
import { IfStatementNode } from './if/if-statement-node';
import { PreprocessorStatementNode } from './preprocessor/preprocessor-statement-node';
import { ReturnStatementNode } from './return/return-statement-node';
import { StatementNode } from './statement-node';
import { WhileStatementNode } from './while/while-statement-node';

export const getStatementNode = (ctx: StatementContext): StatementNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AssertStatementContext) return new AssertStatementNode(ctx);
  if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementNode(ctx);
  if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementNode(ctx);
  if (ctx instanceof ForStatementContext) return new ForStatementNode(ctx);
  if (ctx instanceof IfStatementContext) return new IfStatementNode(ctx);
  if (ctx instanceof PreprocessorStatementContext) return new PreprocessorStatementNode(ctx);
  if (ctx instanceof ReturnStatementContext) return new ReturnStatementNode(ctx);
  if (ctx instanceof WhileStatementContext) return new WhileStatementNode(ctx);

  throw Issue.errorFromContext(ctx, `Statement tree not found for '${ctx.constructor.name}'`);
};

export const getStatementNodes = (contexts: StatementContext[]): StatementNode[] => {
  return contexts?.map(getStatementNode) || [];
};
