import { ParameterContext } from '../../grammar/xon-parser';
import { None, none } from '../../lib/core';
import { ParameterTree } from './parameter-tree';

export const getParameterTree = (ctx: ParameterContext): ParameterTree | None => {
  if (!ctx) {
    return none;
  }
  return new ParameterTree(ctx);
};

export const getParameterTrees = (contexts: ParameterContext[]): ParameterTree[] => {
  return contexts?.map((x) => getParameterTree(x)) || [];
};
