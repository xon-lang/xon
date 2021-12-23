import { IdContext } from '../../grammar/xon-parser';
import { IdNode } from './id-node';

export const getIdNode = (ctx: IdContext): IdNode => {
  if (ctx === undefined) return undefined;

  return new IdNode(ctx);
};
