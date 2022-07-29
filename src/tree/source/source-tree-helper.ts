import { SourceContext } from '../../grammar/xon-parser';
import { SourceTree } from './source-tree';

export const getSourceTree = (ctx: SourceContext | null): SourceTree | null => {
  if (!ctx) return null;

  return new SourceTree(ctx);
};
