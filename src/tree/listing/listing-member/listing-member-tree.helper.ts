import {
  ClassTypeListingMemberContext,
  ExtensionTypeListingMemberContext,
  ListingMemberContext,
  MethodListingMemberContext,
  PropertyListingMemberContext,
} from '../../../grammar/xon-parser';
import { ClassTypeListingMemberTree } from './class-type-listing-member/class-type-listing-member-tree';
import { ExtensionTypeListingMemberTree } from './extension-type-listing-member/extension-type-listing-member-tree';
import { ListingMemberTree } from './listing-member.tree';
import { MethodListingMemberTree } from './method-listing-member/method-listing-member-tree';
import { PropertyListingMemberTree } from './property-listing-member/property-listing-member-tree';

export const getListingMemberTree = (ctx: ListingMemberContext): ListingMemberTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PropertyListingMemberContext) return new PropertyListingMemberTree(ctx);
  if (ctx instanceof MethodListingMemberContext) return new MethodListingMemberTree(ctx);
  if (ctx instanceof ClassTypeListingMemberContext) return new ClassTypeListingMemberTree(ctx);
  if (ctx instanceof ExtensionTypeListingMemberContext)
    return new ExtensionTypeListingMemberTree(ctx);

  throw Error(`ListingMember tree not found for "${ctx.constructor.name}"`);
};

export const getListingMembersTrees = (members: ListingMemberContext[]): ListingMemberTree[] =>
  members?.map(getListingMemberTree) || [];
