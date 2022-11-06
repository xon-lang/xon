import { DeclarationFormatter, FormatterConfig } from '~/formatter';
import { DeclarationContext } from '~/grammar';
import { Issue } from '~/issue';

export const getParameterFormatter = (
  ctx: DeclarationContext,
  config: FormatterConfig,
): DeclarationFormatter | null => {
  if (!ctx) return null;
  if (ctx instanceof DeclarationContext) return new DeclarationFormatter(ctx, config);

  Issue.errorFromContext(ctx, 'Parameter formatter not found"');
};
