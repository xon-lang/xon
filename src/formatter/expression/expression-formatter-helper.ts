import {
  ArrayExpressionFormatter,
  ExpressionFormatter,
  FormatterConfig,
  GroupExpressionFormatter,
  IdExpressionFormatter,
  InfixExpressionFormatter,
  InvokeExpressionFormatter,
  LiteralExpressionFormatter,
  MemberExpressionFormatter,
  MethodExpressionFormatter,
  NullableExpressionFormatter,
  PrefixExpressionFormatter,
  PreprocessorExpressionFormatter,
} from '~/formatter';
import {
  ArrayExpressionContext,
  ExpressionContext,
  GroupExpressionContext,
  IdExpressionContext,
  InfixExpressionContext,
  InvokeExpressionContext,
  LiteralExpressionContext,
  MemberExpressionContext,
  MethodExpressionContext,
  NullableExpressionContext,
  PrefixExpressionContext,
  PreprocessorExpressionContext,
} from '~/grammar';
import { Issue } from '~/issue';

export const getExpressionFormatter = (
  ctx: ExpressionContext,
  config: FormatterConfig,
): ExpressionFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionFormatter(ctx, config);
  if (ctx instanceof GroupExpressionContext) return new GroupExpressionFormatter(ctx, config);
  if (ctx instanceof IdExpressionContext) return new IdExpressionFormatter(ctx, config);
  if (ctx instanceof InfixExpressionContext) return new InfixExpressionFormatter(ctx, config);
  if (ctx instanceof InvokeExpressionContext) return new InvokeExpressionFormatter(ctx, config);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionFormatter(ctx, config);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionFormatter(ctx, config);
  if (ctx instanceof MethodExpressionContext) return new MethodExpressionFormatter(ctx, config);
  if (ctx instanceof NullableExpressionContext) return new NullableExpressionFormatter(ctx, config);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionFormatter(ctx, config);
  if (ctx instanceof PreprocessorExpressionContext)
    return new PreprocessorExpressionFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Expression formatter not found for "${ctx.constructor.name}"`);
};
