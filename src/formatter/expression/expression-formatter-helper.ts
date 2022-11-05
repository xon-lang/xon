import { ArrayExpressionFormatter } from '@/formatter/expression/array/array-expression-formatter';
import { ExpressionFormatter } from '@/formatter/expression/expression-formatter';
import { GroupExpressionFormatter } from '@/formatter/expression/group/group-expression-formatter';
import { IdExpressionFormatter } from '@/formatter/expression/id/id-expression-formatter';
import { InfixExpressionFormatter } from '@/formatter/expression/infix/infix-expression-formatter';
import { InvokeExpressionFormatter } from '@/formatter/expression/invoke/invoke-expression-formatter';
import { LiteralExpressionFormatter } from '@/formatter/expression/literal/literal-expression-formatter';
import { MemberExpressionFormatter } from '@/formatter/expression/member/member-expression-formatter';
import { MethodExpressionFormatter } from '@/formatter/expression/method/method-expression-formatter';
import { NullableExpressionFormatter } from '@/formatter/expression/nullable/nullable-expression-formatter';
import { PrefixExpressionFormatter } from '@/formatter/expression/prefix/prefix-expression-formatter';
import { PreprocessorExpressionFormatter } from '@/formatter/expression/preprocessor/preprocessor-expression-formatter';
import { FormatterConfig } from '@/formatter/formatter-config';
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
} from '@/grammar/xon-parser';
import { Issue } from '@/issue/issue';

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
