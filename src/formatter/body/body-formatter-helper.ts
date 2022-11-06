import { BodyFormatter, FormatterConfig } from '~/formatter';
import { BodyContext } from '~/grammar';

export const getBodyFormatter = (
  ctx: BodyContext,
  config: FormatterConfig,
): BodyFormatter | null => {
  if (!ctx) return null;

  return new BodyFormatter(ctx, config);
};
