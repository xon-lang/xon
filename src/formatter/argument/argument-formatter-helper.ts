import { ArgumentContext } from '../../grammar/xon-parser';
import { FormatterConfig } from '../formatter-config';
import { ArgumentFormatter } from './argument-formatter';

export const getArgumentFormatter = (
  ctx: ArgumentContext,
  config: FormatterConfig,
): ArgumentFormatter | null => {
  if (!ctx) return null;

  return new ArgumentFormatter(ctx, config);
};
