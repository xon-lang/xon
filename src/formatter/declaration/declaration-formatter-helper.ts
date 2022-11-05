import { DeclarationFormatter } from '@/formatter/declaration/declaration-formatter';
import { FormatterConfig } from '@/formatter/formatter-config';
import { DeclarationContext } from '@/grammar/xon-parser';
import { Issue } from '@/issue/issue';

export const getParameterFormatter = (
  ctx: DeclarationContext,
  config: FormatterConfig,
): DeclarationFormatter | null => {
  if (!ctx) return null;
  if (ctx instanceof DeclarationContext) return new DeclarationFormatter(ctx, config);

  Issue.errorFromContext(ctx, 'Parameter formatter not found"');
};
