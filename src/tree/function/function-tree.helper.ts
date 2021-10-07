import { FunctionContext } from '../../grammar/xon-parser';
import { FunctionTree } from './function.tree';

export const getFunctionTree = (context: FunctionContext): FunctionTree => {
  if (context === undefined) return undefined;
  return new FunctionTree(context);
};

export const getFunctionTrees = (contexts: FunctionContext[]): FunctionTree[] =>
  contexts?.map(getFunctionTree) || [];
