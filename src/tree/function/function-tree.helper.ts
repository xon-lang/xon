import { FunctionContext } from '../../grammar/xon-parser';
import { FunctionTree } from './function.tree';

export const getFunctionTree = (ctx: FunctionContext): FunctionTree => {
  if (ctx === undefined) return undefined;
  return new FunctionTree(ctx);
};

export const getFunctionsTrees = (definitions: FunctionContext[]): FunctionTree[] =>
  definitions?.map(getFunctionTree) || [];
