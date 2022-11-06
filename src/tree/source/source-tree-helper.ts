import { SourceContext } from '~/grammar';
import { SourceTree } from '~/tree';

export const getSourceTree = (ctx: SourceContext | null): SourceTree | null => {
  if (!ctx) return null;

  return new SourceTree(ctx);
};
