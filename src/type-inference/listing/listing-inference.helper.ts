import { SourceTree } from '../../tree/source/source-tree';
import { GenericsMap } from '../generics-map';
import { SourceInference } from './source.inference';

export function getSourceInference(tree: SourceTree, genericsMap: GenericsMap): SourceInference {
  return new SourceInference(tree, genericsMap);
}
