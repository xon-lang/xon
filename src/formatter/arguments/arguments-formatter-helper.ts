import { ArgumentsContext } from '../../grammar/xon-parser';
import { FormatterConfig } from '../formatter-config';
import { ArgumentsFormatter } from './arguments-formatter';

export const getArgumentsFormatter = (
  ctx: ArgumentsContext,
  config: FormatterConfig,
): ArgumentsFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof ArgumentsContext) return new ArgumentsFormatter(ctx, config);
};
