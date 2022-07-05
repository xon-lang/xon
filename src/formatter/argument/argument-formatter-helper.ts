import { ArgumentContext } from '../../grammar/xon-parser';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { ArgumentFormatter } from './argument-formatter';

export const getArgumentFormatter = (
  ctx: ArgumentContext,
  config: FormatterConfig,
): ArgumentFormatter | None => {
  if (!ctx) {
    return none;
  }

  return new ArgumentFormatter(ctx, config);
};
