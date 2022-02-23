import { DefinitionContext } from '../../grammar/xon-parser';
import { DefinitionTree } from './definition-tree';

export const getDefinitionTree = (ctx: DefinitionContext): DefinitionTree => {
  if (ctx === undefined) return undefined;
  return new DefinitionTree(ctx);
};

export const getDefinitionTrees = (contexts: DefinitionContext[]): DefinitionTree[] => {
  return contexts?.map((x) => getDefinitionTree(x)) || [];
};
