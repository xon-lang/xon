import { FormatterConfig } from '~/formatter/formatter-config';
import { SourceFormatter } from '~/formatter/source/source-formatter';
import { SourceContext } from '~/grammar/xon-parser';

export const getSourceFormatter = (
  ctx: SourceContext,
  config: FormatterConfig,
): SourceFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof SourceContext) return new SourceFormatter(ctx, config);
};
