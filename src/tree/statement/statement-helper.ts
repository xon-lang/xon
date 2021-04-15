import {
  AssignmentStatementContext,
  BodyContext,
  ExpressionStatementContext,
  IfStatementContext,
  LoopStatementContext,
  PreprocessorStatementContext,
  ReturnStatementContext,
  StatementContext,
} from '../../grammar/xon-parser';
import { AssignmentStatementTree } from './assignment-statement/assignment-statement.tree';
import { ExpressionStatementTree } from './expression-statement/expression-statement.tree';
import { IfStatementTree } from './if-statement/if-statement.tree';
import { LoopStatementTree } from './loop-statement/loop-statement.tree';
import { PreprocessorStatementTree } from './preprocessor-statement/preprocessor-statement.tree';
import { ReturnStatementTree } from './return-statement/return-statement.tree';
import { StatementTree } from './statement.tree';

export const getStatementTree = (ctx: StatementContext): StatementTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AssignmentStatementContext) return new AssignmentStatementTree(ctx);
  if (ctx instanceof ExpressionStatementContext) return new ExpressionStatementTree(ctx);
  if (ctx instanceof PreprocessorStatementContext) return new PreprocessorStatementTree(ctx);
  if (ctx instanceof ReturnStatementContext) return new ReturnStatementTree(ctx);
  if (ctx instanceof IfStatementContext) return new IfStatementTree(ctx);
  if (ctx instanceof LoopStatementContext) return new LoopStatementTree(ctx);

  throw Error(`No Statement found for ${ctx.constructor.name}`);
};

export const getBody = (body: BodyContext): StatementTree[] =>
  body?.statement()?.map(getStatementTree) || [];
