import { ExtensionMethodContext } from '../../grammar/xon-parser';
import { ExtensionMethodTree } from './extension-method.tree';

export const getExtensionMethodTree = (ctx: ExtensionMethodContext): ExtensionMethodTree => {
  if (ctx === undefined) return undefined;
  return new ExtensionMethodTree(ctx);
};

export const getExtensionMethodsTrees = (
  definitions: ExtensionMethodContext[],
): ExtensionMethodTree[] => definitions?.map(getExtensionMethodTree) || [];
