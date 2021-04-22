import { ParameterTree } from '../../tree/parameter/parameter.tree';
import { GenericsMap } from '../generics-map';
import { ParameterInference } from './parameter.inference';

export function getParameterInference(
  tree: ParameterTree,
  genericsMap: GenericsMap,
): ParameterInference {
  return new ParameterInference(tree, genericsMap);
}
