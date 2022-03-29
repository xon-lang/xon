import { DefinitionContext } from '../../grammar/xon-parser';
import { none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { DefinitionFormatter } from './definition-formatter';

export const getDefinitionFormatter = (
  ctx: DefinitionContext,
  config: FormatterConfig,
): DefinitionFormatter => {
  if (!ctx) return none;

  if (ctx instanceof DefinitionContext) return new DefinitionFormatter(ctx, config);
};
