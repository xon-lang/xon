import { ArgumentsContext } from '../../grammar/xon-parser';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { ArgumentsFormatter } from './arguments-formatter';

export const getArgumentsFormatter = (
  ctx: ArgumentsContext,
  config: FormatterConfig,
): ArgumentsFormatter | None => {
  if (!ctx) return none;

  if (ctx instanceof ArgumentsContext) return new ArgumentsFormatter(ctx, config);
};
