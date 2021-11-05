import { BodyContext } from '../../grammar/xon-parser';
import { BodyTree } from './body-tree';

export const getBodyTree = (ctx: BodyContext): BodyTree => {
  if (ctx === undefined) return undefined;
  return new BodyTree(ctx);
};
