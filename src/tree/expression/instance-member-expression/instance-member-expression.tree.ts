import { InstanceMemberExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class InstanceMemberExpressionTree extends ExpressionTree {
    memberName: string;

    constructor(public ctx: InstanceMemberExpressionContext) {
        super();
        this.memberName = ctx.ID().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.memberName,
        };
    }
}
