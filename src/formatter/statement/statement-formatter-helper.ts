import {
  CommentStatementFormatter,
  DeclarationStatementFormatter,
  ExpressionStatementFormatter,
  FormatterConfig,
  ForStatementFormatter,
  IfStatementFormatter,
  ReturnStatementFormatter,
  StatementFormatter,
} from '~/formatter';
import {
  CommentStatementContext,
  DeclarationStatementContext,
  ExpressionStatementContext,
  ForStatementContext,
  IfStatementContext,
  ReturnStatementContext,
  StatementContext,
} from '~/grammar';
import { Issue } from '~/issue';

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
