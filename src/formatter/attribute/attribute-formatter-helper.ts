import { AttributeContext } from '../../grammar/xon-parser';
import { None, none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { AttributeFormatter } from './attribute-formatter';

export const getAttributeFormatter = (
  ctx: AttributeContext,
  config: FormatterConfig,
): AttributeFormatter | None => {
  if (!ctx) return none;

  if (ctx instanceof AttributeContext) return new AttributeFormatter(ctx, config);
};
