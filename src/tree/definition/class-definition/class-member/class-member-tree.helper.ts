import { AttributeClassMemberContext, ClassMemberContext } from '../../../../grammar/xon-parser';
import { AttributeClassMemberTree } from './attribute-class-member/attribute-class-member-tree';
import { ClassMemberTree } from './class-member.tree';

export const getClassMemberTree = (ctx: ClassMemberContext): ClassMemberTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AttributeClassMemberContext) return new AttributeClassMemberTree(ctx);

  throw Error(`ClassMember tree not found for "${ctx.constructor.name}"`);
};

export const getClassMembersTrees = (members: ClassMemberContext[]): ClassMemberTree[] =>
  members?.map(getClassMemberTree) || [];
