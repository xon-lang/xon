import { AwaitExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class AwaitExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: AwaitExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
