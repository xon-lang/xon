import { PropertyContext } from '../../grammar/xon-parser';
import { PropertyTree } from './property-tree';

export const getPropertyTree = (ctx: PropertyContext): PropertyTree => {
  if (ctx === undefined) return undefined;

  return new PropertyTree(ctx);
};
