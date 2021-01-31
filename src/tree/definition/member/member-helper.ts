import {
  MemberContext,
  MethodMemberContext,
  PropertyMemberContext,
} from '../../../grammar/xon-parser';
import { MemberTree } from './member.tree';
import { MethodMemberTree } from './method-member/method-member.tree';
import { PropertyMemberTree } from './property-member/property-member.tree';

export function getMemberTree(ctx: MemberContext): MemberTree {
  if (ctx === undefined) return undefined;
  if (ctx instanceof PropertyMemberContext) return new PropertyMemberTree(ctx);
  if (ctx instanceof MethodMemberContext) return new MethodMemberTree(ctx);

  throw Error(`No Statemenet found for ${ctx.constructor.name}`);
}
