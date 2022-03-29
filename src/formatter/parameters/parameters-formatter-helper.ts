import { ParametersContext } from '../../grammar/xon-parser';
import { none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { ParametersFormatter } from './parameters-formatter';

export const getParametersFormatter = (
  ctx: ParametersContext,
  config: FormatterConfig,
): ParametersFormatter => {
  if (!ctx) return none;

  if (ctx instanceof ParametersContext) return new ParametersFormatter(ctx, config);
};
