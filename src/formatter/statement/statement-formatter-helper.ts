import {
  CommentStatementContext,
  DeclarationStatementContext,
  ExpressionStatementContext,
  ForStatementContext,
  IfStatementContext,
  ReturnStatementContext,
  StatementContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { FormatterConfig } from '../formatter-config';
import { CommentStatementFormatter } from './comment/comment-statement-formatter';
import { DeclarationStatementFormatter } from './declaration/declaration-statement-formatter';
import { ExpressionStatementFormatter } from './expression/expression-statement-formatter';
import { ForStatementFormatter } from './for/for-statement-formatter';
import { IfStatementFormatter } from './if/if-statement-formatter';
import { ReturnStatementFormatter } from './return/return-statement-formatter';
import { StatementFormatter } from './statement-formatter';

export const getStatementFormatter = (
  ctx: StatementContext,
  config: FormatterConfig,
): StatementFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof DeclarationStatementContext)
    return new DeclarationStatementFormatter(ctx, config);
  if (ctx instanceof ExpressionStatementContext)
    return new ExpressionStatementFormatter(ctx, config);
  if (ctx instanceof ForStatementContext) return new ForStatementFormatter(ctx, config);
  if (ctx instanceof IfStatementContext) return new IfStatementFormatter(ctx, config);
  if (ctx instanceof ReturnStatementContext) return new ReturnStatementFormatter(ctx, config);
  if (ctx instanceof CommentStatementContext) return new CommentStatementFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Statement formatter not found for "${ctx.constructor.name}"`);
};
