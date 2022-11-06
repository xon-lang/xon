import { BodyFormatter } from '~/formatter/body/body-formatter';
import { FormatterConfig } from '~/formatter/formatter-config';
import { BodyContext } from '~/grammar/xon-parser';

export const getBodyFormatter = (
  ctx: BodyContext,
  config: FormatterConfig,
): BodyFormatter | null => {
  if (!ctx) return null;

  return new BodyFormatter(ctx, config);
};
