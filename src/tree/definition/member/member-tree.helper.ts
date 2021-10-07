import {
  InitMemberContext,
  MemberContext,
  MethodMemberContext,
  OperatorMemberContext,
  PropertyMemberContext,
} from '../../../grammar/xon-parser';
import { InitMemberTree } from './init-member/init-member.tree';
import { MemberTree } from './member.tree';
import { MethodMemberTree } from './method-member/method-member.tree';
import { OperatorMemberTree } from './operator-member/operator-member.tree';
import { PropertyMemberTree } from './property-member/property-member.tree';

export const getMemberTree = (ctx: MemberContext): MemberTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PropertyMemberContext) return new PropertyMemberTree(ctx);
  if (ctx instanceof InitMemberContext) return new InitMemberTree(ctx);
  if (ctx instanceof MethodMemberContext) return new MethodMemberTree(ctx);
  if (ctx instanceof OperatorMemberContext) return new OperatorMemberTree(ctx);

  throw Error(`Member tree not found for "${ctx.constructor.name}"`);
};

export const getMembersTrees = (members: MemberContext[]): MemberTree[] =>
  members?.map(getMemberTree) || [];
