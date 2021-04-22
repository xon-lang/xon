import { ArgumentTree } from '../../tree/argument/argument.tree';
import { GenericsMap } from '../generics-map';
import { ArgumentInference } from './argument.inference';

export function getArgumentInference(
  tree: ArgumentTree,
  genericsMap: GenericsMap,
): ArgumentInference {
  return new ArgumentInference(tree, genericsMap);
}
