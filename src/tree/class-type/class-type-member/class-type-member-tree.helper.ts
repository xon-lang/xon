import {
  ClassTypeMemberContext,
  InitClassTypeMemberContext,
  MethodClassTypeMemberContext,
  OperatorClassTypeMemberContext,
  PropertyClassTypeMemberContext,
} from '../../../grammar/xon-parser';
import { ClassTypeMemberTree } from './class-type-member.tree';
import { InitClassTypeMemberTree } from './init-class-type-member/init-class-type-member-tree';
import { MethodClassTypeMemberTree } from './method-class-type-member/method-class-type-member-tree';
import { OperatorClassTypeMemberTree } from './operator-class-type-member/operator-class-type-member-tree';
import { PropertyClassTypeMemberTree } from './property-definition-member/property-class-type-member-tree';

export const getClassTypeMemberTree = (ctx: ClassTypeMemberContext): ClassTypeMemberTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PropertyClassTypeMemberContext) return new PropertyClassTypeMemberTree(ctx);
  if (ctx instanceof InitClassTypeMemberContext) return new InitClassTypeMemberTree(ctx);
  if (ctx instanceof MethodClassTypeMemberContext) return new MethodClassTypeMemberTree(ctx);
  if (ctx instanceof OperatorClassTypeMemberContext) return new OperatorClassTypeMemberTree(ctx);

  throw Error(`ClassTypeMember tree not found for "${ctx.constructor.name}"`);
};

export const getClassTypeMembersTrees = (
  members: ClassTypeMemberContext[],
): ClassTypeMemberTree[] => members?.map(getClassTypeMemberTree) || [];
