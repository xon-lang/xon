import { ArgumentFormatter, FormatterConfig } from '~/formatter';
import { ArgumentContext } from '~/grammar';

export const getArgumentFormatter = (
  ctx: ArgumentContext,
  config: FormatterConfig,
): ArgumentFormatter | null => {
  if (!ctx) return null;

  return new ArgumentFormatter(ctx, config);
};
