import {
  ClassTypeSourceMemberContext,
  ExtensionTypeSourceMemberContext,
  MethodSourceMemberContext,
  PropertySourceMemberContext,
  SourceMemberContext,
} from '../../../grammar/xon-parser';
import { ClassTypeSourceMemberTree } from './class-type-source-member/class-type-source-member-tree';
import { ExtensionTypeSourceMemberTree } from './extension-type-source-member/extension-type-source-member-tree';
import { MethodSourceMemberTree } from './method-source-member/method-source-member-tree';
import { PropertySourceMemberTree } from './property-source-member/property-source-member-tree';
import { SourceMemberTree } from './source-member.tree';

export const getSourceMemberTree = (ctx: SourceMemberContext): SourceMemberTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PropertySourceMemberContext) return new PropertySourceMemberTree(ctx);
  if (ctx instanceof MethodSourceMemberContext) return new MethodSourceMemberTree(ctx);
  if (ctx instanceof ClassTypeSourceMemberContext) return new ClassTypeSourceMemberTree(ctx);
  if (ctx instanceof ExtensionTypeSourceMemberContext)
    return new ExtensionTypeSourceMemberTree(ctx);

  throw Error(`SourceMember tree not found for "${ctx.constructor.name}"`);
};

export const getSourceMembersTrees = (members: SourceMemberContext[]): SourceMemberTree[] =>
  members?.map(getSourceMemberTree) || [];
