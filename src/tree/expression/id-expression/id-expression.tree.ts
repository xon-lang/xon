import { IdExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
    id: string;

    constructor(public ctx: IdExpressionContext) {
        super();
        this.id = ctx.ID().text;
    }

    getType() {
        return this.getIdType(this.id);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            id: this.id,
        };
    }
}
