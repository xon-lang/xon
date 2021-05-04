import { ExtensionMethodTree } from '../../tree/extension-method/extension-method.tree';
import { GenericsMap } from '../generics-map';
import { FunctionInference } from './extension-method.inference';

export function getExtensionMethodInference(
  tree: ExtensionMethodTree,
  genericsMap: GenericsMap,
): FunctionInference {
  return new FunctionInference(tree, genericsMap);
}
