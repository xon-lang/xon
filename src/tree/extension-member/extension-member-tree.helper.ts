import { ExtensionMemberContext } from '../../grammar/xon-parser';
import { ExtensionMemberTree } from './extension-member.tree';

export const getExtensionMemberTree = (ctx: ExtensionMemberContext): ExtensionMemberTree => {
  if (ctx === undefined) return undefined;
  return new ExtensionMemberTree(ctx);
};

export const getExtensionMemberTrees = (
  extensionMember: ExtensionMemberContext[],
): ExtensionMemberTree[] => extensionMember?.map(getExtensionMemberTree) || [];
