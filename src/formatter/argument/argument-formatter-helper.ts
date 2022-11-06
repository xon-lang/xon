import { ArgumentFormatter } from '~/formatter/argument/argument-formatter';
import { FormatterConfig } from '~/formatter/formatter-config';
import { ArgumentContext } from '~/grammar/xon-parser';

export const getArgumentFormatter = (
  ctx: ArgumentContext,
  config: FormatterConfig,
): ArgumentFormatter | null => {
  if (!ctx) return null;

  return new ArgumentFormatter(ctx, config);
};
