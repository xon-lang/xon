import { BodyContext } from '../../grammar/xon-parser';
import { FormatterConfig } from '../formatter-config';
import { BodyFormatter } from './body-formatter';

export const getBodyFormatter = (
  ctx: BodyContext,
  config: FormatterConfig,
): BodyFormatter | null => {
  if (!ctx) return null;

  return new BodyFormatter(ctx, config);
};
