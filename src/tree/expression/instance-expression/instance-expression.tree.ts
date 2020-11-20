import { InstanceExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class InstanceExpressionTree extends ExpressionTree {
    name: string;

    constructor(public ctx: InstanceExpressionContext) {
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
