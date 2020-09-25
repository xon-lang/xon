import { InfixOperatorMemberContext, MemberContext } from './../../../grammar/xon-parser';
import { InfixOperatorMemberTree } from './infix-operator-member/infix-operator-member.tree';
import { MemberTree } from './member.tree';

export function getMemberTree(ctx: MemberContext): MemberTree {
    if (ctx === undefined) return undefined;

    if (ctx instanceof InfixOperatorMemberContext) return new InfixOperatorMemberTree(ctx);

    throw Error('No Member found for ' + ctx?.constructor?.name);
}

export function getMembersTree(ctxs: MemberContext[]) {
    return ctxs.map(getMemberTree);
}
