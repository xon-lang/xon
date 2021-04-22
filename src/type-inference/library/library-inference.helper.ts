import { LibraryTree } from '../../tree/library/library.tree';
import { GenericsMap } from '../generics-map';
import { LibraryInference } from './library.inference';

export function getLibraryInference(tree: LibraryTree, genericsMap: GenericsMap): LibraryInference {
  return new LibraryInference(tree, genericsMap);
}
