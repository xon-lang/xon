import { ArgumentContext } from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { ArgumentFormatter } from './argument-formatter';

export const getArgumentFormatter = (
  ctx: ArgumentContext,
  config: FormatterConfig,
): ArgumentFormatter | None => {
  if (!ctx) return none;

  if (ctx instanceof ArgumentContext) return new ArgumentFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Argument formatter not found"`);
};
