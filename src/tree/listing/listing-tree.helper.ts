import { ListingContext } from '../../grammar/xon-parser';
import { ListingTree } from './listing-tree';

export const getListingTree = (ctx: ListingContext): ListingTree => {
  if (ctx === undefined) return undefined;
  return new ListingTree(ctx);
};
