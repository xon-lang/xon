import { BodyContext, MultipleBodyContext, SingleBodyContext } from '../../grammar/xon-parser';
import { none } from '../../lib/core';
import { BodyTree } from './body-tree';
import { MultipleBodyTree } from './multiple/multiple-body-tree';
import { SingleBodyTree } from './single/single-body-tree';

export const getBodyTree = (ctx: BodyContext): BodyTree => {
  if (!ctx) return none;

  if (ctx instanceof SingleBodyContext) return new SingleBodyTree(ctx);
  if (ctx instanceof MultipleBodyContext) return new MultipleBodyTree(ctx);
};
