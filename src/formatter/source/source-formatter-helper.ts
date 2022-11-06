import { FormatterConfig, SourceFormatter } from '~/formatter';
import { SourceContext } from '~/grammar';

export const getSourceFormatter = (
  ctx: SourceContext,
  config: FormatterConfig,
): SourceFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof SourceContext) return new SourceFormatter(ctx, config);
};
