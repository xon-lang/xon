import { ClassTypeContext } from '../../grammar/xon-parser';
import { ClassTypeTree } from './class-type-tree';

export const getClassTypeTree = (ctx: ClassTypeContext): ClassTypeTree => {
  if (ctx === undefined) return undefined;

  return new ClassTypeTree(ctx);
};
