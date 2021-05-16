import { ModuleContext } from '../../grammar/xon-parser';
import { ModuleTree } from './module.tree';

export const getModuleTree = (ctx: ModuleContext): ModuleTree => {
  if (ctx === undefined) return undefined;
  return new ModuleTree(ctx);
};
