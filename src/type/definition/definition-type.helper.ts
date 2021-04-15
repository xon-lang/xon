import { DefinitionTree } from '../../tree/definition/definition.tree';
import { GenericsMap } from '../generics-map';
import { DefinitionType } from './definition.type';

export function fillDefinitionTypes(tree: DefinitionTree, genericsMap: GenericsMap): void {
  new DefinitionType(tree, genericsMap).fillTypes();
}
