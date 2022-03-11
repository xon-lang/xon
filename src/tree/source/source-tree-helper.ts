import { SourceContext } from '../../grammar/xon-parser';
import { none } from '../../lib/core';
import { SourceTree } from './source-tree';

export const getSourceTree = (ctx: SourceContext): SourceTree => {
  if (!ctx) return none;

  return new SourceTree(ctx);
};
