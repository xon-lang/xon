import { DeclarationContext } from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { DeclarationFormatter } from './declaration-formatter';

export const getParameterFormatter = (
  ctx: DeclarationContext,
  config: FormatterConfig,
): DeclarationFormatter | None => {
  if (!ctx) return none;

  if (ctx instanceof DeclarationContext) return new DeclarationFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Parameter formatter not found"`);
};
