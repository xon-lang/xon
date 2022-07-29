import { DeclarationsContext } from '../../grammar/xon-parser';
import { FormatterConfig } from '../formatter-config';
import { ParametersFormatter } from './declarations-formatter';

export const getDeclarationsFormatter = (
  ctx: DeclarationsContext,
  config: FormatterConfig,
): ParametersFormatter | null => {
  if (!ctx) return null;

  if (ctx instanceof DeclarationsContext) return new ParametersFormatter(ctx, config);
};
