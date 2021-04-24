import { FunctionTree } from '../../tree/function/function.tree';
import { GenericsMap } from '../generics-map';
import { FunctionInference } from './function.inference';

export function getFunctionInference(
  tree: FunctionTree,
  genericsMap: GenericsMap,
): FunctionInference {
  return new FunctionInference(tree, genericsMap);
}
