import { SpreadExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class SpreadExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: SpreadExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
    }

    getType() {
        return this.value.getType();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
