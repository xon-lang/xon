import {
  ExpressionContext,
  MultipleBodyContext,
  SingleBodyContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { BodyFormatter } from './body-formatter';
import { MultipleBodyFormatter } from './multiple/multiple-body-formatter';
import { SingleBodyFormatter } from './single/single-body-formatter';

export const getBodyFormatter = (
  ctx: ExpressionContext,
  config: FormatterConfig,
): BodyFormatter => {
  if (!ctx) return none;

  if (ctx instanceof MultipleBodyContext) return new MultipleBodyFormatter(ctx, config);
  if (ctx instanceof SingleBodyContext) return new SingleBodyFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Body formatter not found for "${ctx.constructor.name}"`);
};
