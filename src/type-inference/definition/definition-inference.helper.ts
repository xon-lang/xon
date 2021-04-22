import { DefinitionTree } from '../../tree/definition/definition.tree';
import { GenericsMap } from '../generics-map';
import { DefinitionInference } from './definition.inference';

export function fillDefinitionTypes(tree: DefinitionTree, genericsMap: GenericsMap): void {
  new DefinitionInference(tree, genericsMap).fillTypes();
}
