import { MemberContext, OperatorMemberContext } from './../../../grammar/xon-parser';
import { MemberTree } from './member.tree';
import { OperatorMemberTree } from './operator-member/operator-member.tree';

export function getMemberTree(ctx: MemberContext): MemberTree {
    if (ctx === undefined) return undefined;

    if (ctx instanceof OperatorMemberContext) return new OperatorMemberTree(ctx);

    throw Error('No Member found for ' + ctx?.constructor?.name);
}

export function getMembersTree(ctxs: MemberContext[]) {
    return ctxs.map(getMemberTree);
}
