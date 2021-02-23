import {
  InfixOperatorMemberContext,
  InitMemberContext,
  MemberContext,
  MethodMemberContext,
  PostfixOperatorMemberContext,
  PrefixOperatorMemberContext,
  PropertyMemberContext,
} from '../../../grammar/xon-parser';
import { InfixOperatorMemberTree } from './infix-operator-member/infix-operator-member.tree';
import { InitMemberTree } from './init-member/init-member.tree';
import { MemberTree } from './member.tree';
import { MethodMemberTree } from './method-member/method-member.tree';
import { PostfixOperatorMemberTree } from './postfix-operator-member/postfix-operator-member.tree';
import { PrefixOperatorMemberTree } from './prefix-operator-member/prefix-operator-member.tree';
import { PropertyMemberTree } from './property-member/property-member.tree';

export const getMemberTree = (ctx: MemberContext): MemberTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof PropertyMemberContext) return new PropertyMemberTree(ctx);
  if (ctx instanceof InitMemberContext) return new InitMemberTree(ctx);
  if (ctx instanceof MethodMemberContext) return new MethodMemberTree(ctx);
  if (ctx instanceof InfixOperatorMemberContext) return new InfixOperatorMemberTree(ctx);
  if (ctx instanceof PrefixOperatorMemberContext) return new PrefixOperatorMemberTree(ctx);
  if (ctx instanceof PostfixOperatorMemberContext) return new PostfixOperatorMemberTree(ctx);

  throw Error(`No statement found for ${ctx.constructor.name}`);
};
