import { ExtensionPropertyTree } from '../../tree/extension-property/extension-property.tree';
import { GenericsMap } from '../generics-map';
import { ExtensionPropertyInference } from './extension-property.inference';

export function getExtensionPropertyInference(
  tree: ExtensionPropertyTree,
  genericsMap: GenericsMap,
): ExtensionPropertyInference {
  return new ExtensionPropertyInference(tree, genericsMap);
}
