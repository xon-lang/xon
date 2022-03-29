import { SourceContext } from '../../grammar/xon-parser';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { SourceFormatter } from './source-formatter';

export const getSourceFormatter = (
  ctx: SourceContext,
  config: FormatterConfig,
): SourceFormatter | None => {
  if (!ctx) return none;

  if (ctx instanceof SourceContext) return new SourceFormatter(ctx, config);
};
