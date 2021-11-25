import { DefinitionTree } from '../../tree/definition/definition.tree';
import { GenericsMap } from '../generics-map';
import { DefinitionInference } from './definition.inference';

export function getDefinitionInference(
  tree: DefinitionTree,
  genericsMap: GenericsMap,
): DefinitionInference {
  return new DefinitionInference(tree, genericsMap);
}
