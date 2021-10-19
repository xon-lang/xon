import {
  ExtensionTypeMemberContext,
  MethodExtensionTypeMemberContext,
  PropertyExtensionTypeMemberContext,
} from '../../../grammar/xon-parser';
import { ExtensionTypeMemberTree } from './extension-type-member.tree';
import { MethodExtensionTypeMemberTree } from './method-extension-type-member/method-extension-type-member-tree';
import { PropertyExtensionTypeMemberTree } from './property-definition-member/property-extension-type-member-tree';

export const getExtensionTypeMemberTree = (
  ctx: ExtensionTypeMemberContext,
): ExtensionTypeMemberTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PropertyExtensionTypeMemberContext)
    return new PropertyExtensionTypeMemberTree(ctx);
  if (ctx instanceof MethodExtensionTypeMemberContext)
    return new MethodExtensionTypeMemberTree(ctx);

  throw Error(`ExtensionTypeMember tree not found for "${ctx.constructor.name}"`);
};

export const getExtensionTypeMembersTrees = (
  members: ExtensionTypeMemberContext[],
): ExtensionTypeMemberTree[] => members?.map(getExtensionTypeMemberTree) || [];
