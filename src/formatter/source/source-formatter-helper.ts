import { SourceContext } from '../../grammar/xon-parser';
import { FormatterConfig } from '../formatter-config';
import { SourceFormatter } from './source-formatter';

export const getSourceFormatter = (
  ctx: SourceContext,
  config: FormatterConfig,
): SourceFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof SourceContext) return new SourceFormatter(ctx, config);
};
