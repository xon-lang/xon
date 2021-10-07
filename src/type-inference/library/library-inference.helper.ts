import { ImportTree } from '../../tree/import/import.tree';
import { GenericsMap } from '../generics-map';
import { LibraryInference } from './library.inference';

export function getLibraryInference(tree: ImportTree, genericsMap: GenericsMap): LibraryInference {
  return new LibraryInference(tree, genericsMap);
}
