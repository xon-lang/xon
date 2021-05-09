import { ExtensionMethodTree } from '../../tree/extension-method/extension-method.tree';
import { GenericsMap } from '../generics-map';
import { ExtensionMethodInference } from './extension-method.inference';

export function getExtensionMethodInference(
  tree: ExtensionMethodTree,
  genericsMap: GenericsMap,
): ExtensionMethodInference {
  return new ExtensionMethodInference(tree, genericsMap);
}
