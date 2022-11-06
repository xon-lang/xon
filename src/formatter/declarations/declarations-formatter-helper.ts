import { FormatterConfig, ParametersFormatter } from '~/formatter';
import { DeclarationsContext } from '~/grammar';

export const getDeclarationsFormatter = (
  ctx: DeclarationsContext,
  config: FormatterConfig,
): ParametersFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof DeclarationsContext) return new ParametersFormatter(ctx, config);
};
