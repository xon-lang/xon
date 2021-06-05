import { ExtensionPropertyContext } from '../../grammar/xon-parser';
import { ExtensionPropertyTree } from './extension-property.tree';

export const getExtensionPropertyTree = (ctx: ExtensionPropertyContext): ExtensionPropertyTree => {
  if (ctx === undefined) return undefined;
  return new ExtensionPropertyTree(ctx);
};

export const getExtensionPropertiesTrees = (
  definitions: ExtensionPropertyContext[],
): ExtensionPropertyTree[] => definitions?.map(getExtensionPropertyTree) || [];
