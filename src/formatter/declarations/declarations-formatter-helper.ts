import { DeclarationsContext } from '../../grammar/xon-parser';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { ParametersFormatter } from './declarations-formatter';

export const getDeclarationsFormatter = (
  ctx: DeclarationsContext,
  config: FormatterConfig,
): ParametersFormatter | None => {
  if (!ctx) {
    return none;
  }

  if (ctx instanceof DeclarationsContext) {
    return new ParametersFormatter(ctx, config);
  }
};
