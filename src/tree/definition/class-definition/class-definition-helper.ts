import { ClassDefinitionContext } from '../../../grammar/xon-parser';
import { ClassDefinitionTree } from './class-definition-tree';

export const getClassDefinitionTree = (ctx: ClassDefinitionContext): ClassDefinitionTree => {
  if (ctx === undefined) return undefined;

  return new ClassDefinitionTree(ctx);
};
