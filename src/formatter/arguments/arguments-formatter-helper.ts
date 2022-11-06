import { ArgumentsFormatter, FormatterConfig } from '~/formatter';
import { ArgumentsContext } from '~/grammar';

export const getArgumentsFormatter = (
  ctx: ArgumentsContext,
  config: FormatterConfig,
): ArgumentsFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof ArgumentsContext) return new ArgumentsFormatter(ctx, config);
};
