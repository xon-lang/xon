import { BodyContext } from '../../grammar/xon-parser';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { BodyFormatter } from './body-formatter';

export const getBodyFormatter = (
  ctx: BodyContext,
  config: FormatterConfig,
): BodyFormatter | None => {
  if (!ctx) return none;

  return new BodyFormatter(ctx, config);
};
