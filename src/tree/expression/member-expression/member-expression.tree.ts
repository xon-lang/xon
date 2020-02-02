import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
    name: string;

    constructor(public ctx: MemberExpressionContext) {
        super();
        this.name = ctx.ID().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
        };
    }
}
