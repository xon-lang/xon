import { BodyContext, MultipleBodyContext, SingleBodyContext } from '../../grammar/xon-parser';
import { BodyNode } from './body-node';
import { MultipleBodyNode } from './multiple/multiple-body-node';
import { SingleBodyNode } from './single/single-body-node';

export const getBodyNode = (ctx: BodyContext): BodyNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof SingleBodyContext) return new SingleBodyNode(ctx);
  if (ctx instanceof MultipleBodyContext) return new MultipleBodyNode(ctx);
};
