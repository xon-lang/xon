import { ParametersFormatter } from '@/formatter/declarations/declarations-formatter';
import { FormatterConfig } from '@/formatter/formatter-config';
import { DeclarationsContext } from '@/grammar/xon-parser';

export const getDeclarationsFormatter = (
  ctx: DeclarationsContext,
  config: FormatterConfig,
): ParametersFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof DeclarationsContext) return new ParametersFormatter(ctx, config);
};
