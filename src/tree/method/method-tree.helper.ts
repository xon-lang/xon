import { MethodContext } from '../../grammar/xon-parser';
import { MethodTree } from './method-tree';

export const getMethodTree = (ctx: MethodContext): MethodTree => {
  if (ctx === undefined) return undefined;

  return new MethodTree(ctx);
};
