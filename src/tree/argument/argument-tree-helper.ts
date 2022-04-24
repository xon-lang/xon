import { ArgumentContext } from '../../grammar/xon-parser';
import { none } from '../../lib/core';
import { ArgumentTree } from './argument-tree';

export const getArgumentTree = (ctx: ArgumentContext): ArgumentTree => {
  if (!ctx) return none;
  return new ArgumentTree(ctx);
};

export const getArgumentTrees = (contexts: ArgumentContext[]): ArgumentTree[] => {
  return contexts?.map((x) => getArgumentTree(x)) || [];
};
