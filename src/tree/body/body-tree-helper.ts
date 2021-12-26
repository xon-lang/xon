import { BodyContext, MultipleBodyContext, SingleBodyContext } from '../../grammar/xon-parser';
import { BodyTree } from './body-tree';
import { MultipleBodyTree } from './multiple/multiple-body-tree';
import { SingleBodyTree } from './single/single-body-tree';

export const getBodyTree = (ctx: BodyContext): BodyTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof SingleBodyContext) return new SingleBodyTree(ctx);
  if (ctx instanceof MultipleBodyContext) return new MultipleBodyTree(ctx);
};
