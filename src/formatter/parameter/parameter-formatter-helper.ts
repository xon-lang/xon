import { ExprContext, ParameterContext } from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { ParameterFormatter } from './parameter-formatter';

export const getParameterFormatter = (
  ctx: ExprContext,
  config: FormatterConfig,
): ParameterFormatter => {
  if (!ctx) return none;

  if (ctx instanceof ParameterContext) return new ParameterFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Parameter formatter not found for "${ctx.constructor.name}"`);
};
