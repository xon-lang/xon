import {
  ClassMemberContext,
  InitClassMemberContext,
  MethodClassMemberContext,
  OperatorClassMemberContext,
  PropertyClassMemberContext,
} from '../../../../grammar/xon-parser';
import { ClassMemberTree } from './class-member.tree';
import { InitClassMemberTree } from './init-class-member/init-class-member-tree';
import { MethodClassMemberTree } from './method-class-member/method-class-member-tree';
import { OperatorClassMemberTree } from './operator-class-member/operator-class-member-tree';
import { PropertyClassMemberTree } from './property-class-member/property-class-member-tree';

export const getClassMemberTree = (ctx: ClassMemberContext): ClassMemberTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PropertyClassMemberContext) return new PropertyClassMemberTree(ctx);
  if (ctx instanceof InitClassMemberContext) return new InitClassMemberTree(ctx);
  if (ctx instanceof MethodClassMemberContext) return new MethodClassMemberTree(ctx);
  if (ctx instanceof OperatorClassMemberContext) return new OperatorClassMemberTree(ctx);

  throw Error(`ClassMember tree not found for "${ctx.constructor.name}"`);
};

export const getClassMembersTrees = (members: ClassMemberContext[]): ClassMemberTree[] =>
  members?.map(getClassMemberTree) || [];
