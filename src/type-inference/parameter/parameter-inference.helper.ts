import { ExpressionParameterTree } from '../../tree/expression-parameter/expression-parameter.tree';
import { GenericsMap } from '../generics-map';
import { ParameterInference } from './parameter.inference';

export function getParameterInference(
  tree: ExpressionParameterTree,
  genericsMap: GenericsMap,
): ParameterInference {
  return new ParameterInference(tree, genericsMap);
}
