import { SourceContext } from '../../grammar/xon-parser';
import { SourceNode } from './source-node';

export const getSourceNode = (ctx: SourceContext): SourceNode => {
  if (ctx === undefined) return undefined;

  return new SourceNode(ctx);
};