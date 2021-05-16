import { ModuleTree } from '../../tree/module/module.tree';
import { GenericsMap } from '../generics-map';
import { ModuleInference } from './module.inference';

export function getModuleInference(tree: ModuleTree, genericsMap: GenericsMap): ModuleInference {
  return new ModuleInference(tree, genericsMap);
}
