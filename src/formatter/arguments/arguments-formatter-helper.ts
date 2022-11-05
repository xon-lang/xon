import { ArgumentsFormatter } from '@/formatter/arguments/arguments-formatter';
import { FormatterConfig } from '@/formatter/formatter-config';
import { ArgumentsContext } from '@/grammar/xon-parser';

export const getArgumentsFormatter = (
  ctx: ArgumentsContext,
  config: FormatterConfig,
): ArgumentsFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof ArgumentsContext) return new ArgumentsFormatter(ctx, config);
};
