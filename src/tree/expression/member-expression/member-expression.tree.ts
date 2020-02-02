import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
    object: ExpressionTree;
    name: string;

    constructor(public ctx: MemberExpressionContext) {
        super();
        this.object = getExpressionTree(ctx.expression());
        this.name = ctx.ID().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            object: this.object.toPlain(),
            name: this.name,
        };
    }
}
