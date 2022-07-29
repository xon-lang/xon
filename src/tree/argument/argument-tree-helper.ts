import { ArgumentContext } from '../../grammar/xon-parser';
import { ArgumentTree } from './argument-tree';

export const getArgumentTree = (ctx: ArgumentContext): ArgumentTree => {
  if (!ctx) return null;
  return new ArgumentTree(ctx);
};

export const getArgumentTrees = (contexts: ArgumentContext[]): ArgumentTree[] => {
  return contexts?.map((x) => getArgumentTree(x)) || [];
};
