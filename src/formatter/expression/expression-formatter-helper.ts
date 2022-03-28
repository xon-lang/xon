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
  PreprocessorExpressionContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { ArrayExpressionFormatter } from './array/array-expression-formatter';
import { ExpressionFormatter } from './expression-formatter';
import { GroupExpressionFormatter } from './group/group-expression-formatter';
import { IdExpressionFormatter } from './id/id-expression-formatter';
import { InfixExpressionFormatter } from './infix/infix-expression-formatter';
import { InvokeExpressionFormatter } from './invoke/invoke-expression-formatter';
import { LiteralExpressionFormatter } from './literal/literal-expression-formatter';
import { MemberExpressionFormatter } from './member/member-expression-formatter';
import { MethodExpressionFormatter } from './method/method-expression-formatter';
import { NullableExpressionFormatter } from './nullable/nullable-expression-formatter';
import { PreprocessorExpressionFormatter } from './preprocessor/preprocessor-expression-formatter';

export const getExpressionFormatter = (
  ctx: ExpressionContext,
  config: FormatterConfig,
): ExpressionFormatter => {
  if (!ctx) return none;

  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionFormatter(ctx, config);
  if (ctx instanceof GroupExpressionContext) return new GroupExpressionFormatter(ctx, config);
  if (ctx instanceof IdExpressionContext) return new IdExpressionFormatter(ctx, config);
  if (ctx instanceof InfixExpressionContext) return new InfixExpressionFormatter(ctx, config);
  if (ctx instanceof InvokeExpressionContext) return new InvokeExpressionFormatter(ctx, config);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionFormatter(ctx, config);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionFormatter(ctx, config);
  if (ctx instanceof MethodExpressionContext) return new MethodExpressionFormatter(ctx, config);
  if (ctx instanceof NullableExpressionContext) return new NullableExpressionFormatter(ctx, config);
  if (ctx instanceof PreprocessorExpressionContext)
    return new PreprocessorExpressionFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Expression formatter not found for "${ctx.constructor.name}"`);
};

// export const getExpressionFormatters = (contexts: ExpressionContext[]): ExpressionFormatter[] => {
//   return contexts?.map(getExpressionFormatter) || [];
// };