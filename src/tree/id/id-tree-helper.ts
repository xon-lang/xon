import { IdContext } from '../../grammar/xon-parser';
import { IdTree } from './id-tree';

export const getIdTree = (ctx: IdContext): IdTree => {
  if (!ctx) return null;

  return new IdTree(ctx);
};
