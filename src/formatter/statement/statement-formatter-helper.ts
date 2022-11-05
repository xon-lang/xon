import { FormatterConfig } from '@/formatter/formatter-config';
import { CommentStatementFormatter } from '@/formatter/statement/comment/comment-statement-formatter';
import { DeclarationStatementFormatter } from '@/formatter/statement/declaration/declaration-statement-formatter';
import { ExpressionStatementFormatter } from '@/formatter/statement/expression/expression-statement-formatter';
import { ForStatementFormatter } from '@/formatter/statement/for/for-statement-formatter';
import { IfStatementFormatter } from '@/formatter/statement/if/if-statement-formatter';
import { ReturnStatementFormatter } from '@/formatter/statement/return/return-statement-formatter';
import { StatementFormatter } from '@/formatter/statement/statement-formatter';
import {
  CommentStatementContext,
  DeclarationStatementContext,
  ExpressionStatementContext,
  ForStatementContext,
  IfStatementContext,
  ReturnStatementContext,
  StatementContext,
} from '@/grammar/xon-parser';
import { Issue } from '@/issue/issue';

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
