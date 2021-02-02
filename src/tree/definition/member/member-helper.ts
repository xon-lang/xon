import {
  InfixOperatorMemberContext,
  InheritanceMemberContext,
  MemberContext,
  MethodMemberContext,
  PropertyMemberContext,
} from '../../../grammar/xon-parser';
import { InfixOperatorMemberTree } from './infix-operator-member/infix-operator-member.tree';
import { InheritanceMemberTree } from './inheritance-member/inheritance-member.tree';
import { MemberTree } from './member.tree';
import { MethodMemberTree } from './method-member/method-member.tree';
import { PropertyMemberTree } from './property-member/property-member.tree';

export function getMemberTree(ctx: MemberContext): MemberTree {
  if (ctx === undefined) return undefined;
  if (ctx instanceof InheritanceMemberContext) return new InheritanceMemberTree(ctx);
  if (ctx instanceof PropertyMemberContext) return new PropertyMemberTree(ctx);
  if (ctx instanceof MethodMemberContext) return new MethodMemberTree(ctx);
  if (ctx instanceof InfixOperatorMemberContext) return new InfixOperatorMemberTree(ctx);

  throw Error(`No Statemenet found for ${ctx.constructor.name}`);
}
