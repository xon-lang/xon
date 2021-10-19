import { ExtensionTypeContext } from '../../grammar/xon-parser';
import { ExtensionTypeTree } from './extension-type-tree';

export const getExtensionTypeTree = (ctx: ExtensionTypeContext): ExtensionTypeTree => {
  if (ctx === undefined) return undefined;

  return new ExtensionTypeTree(ctx);
};
