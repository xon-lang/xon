import { ListingTree } from '../../tree/listing/listing-tree';
import { GenericsMap } from '../generics-map';
import { ListingInference } from './listing.inference';

export function getListingInference(tree: ListingTree, genericsMap: GenericsMap): ListingInference {
  return new ListingInference(tree, genericsMap);
}
