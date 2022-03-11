import { DefinitionContext } from '../../grammar/xon-parser';
import { none } from '../../lib/core';
import { DefinitionTree } from './definition-tree';

export const getDefinitionTree = (ctx: DefinitionContext): DefinitionTree => {
  if (!ctx) return none;
  return new DefinitionTree(ctx);
};

export const getDefinitionTrees = (contexts: DefinitionContext[]): DefinitionTree[] => {
  return contexts?.map((x) => getDefinitionTree(x)) || [];
};
