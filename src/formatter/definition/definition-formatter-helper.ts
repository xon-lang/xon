import { DefinitionContext } from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { DefinitionFormatter } from './definition-formatter';

export const getDefinitionFormatter = (
  ctx: DefinitionContext,
  config: FormatterConfig,
): DefinitionFormatter | None => {
  if (!ctx) return none;
  if (ctx instanceof DefinitionContext) return new DefinitionFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Definition formatter not found"`);
};
