import { ListingTree } from '../../tree/listing/listing.tree';
import { GenericsMap } from '../generics-map';
import { ModuleInference } from './module.inference';

export function getModuleInference(tree: ListingTree, genericsMap: GenericsMap): ModuleInference {
  return new ModuleInference(tree, genericsMap);
}
