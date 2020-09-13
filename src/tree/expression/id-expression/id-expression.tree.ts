import { IdExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
    name: string;

    constructor(public ctx: IdExpressionContext) {
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
