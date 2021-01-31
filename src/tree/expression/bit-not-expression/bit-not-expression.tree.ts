import { BitNotExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class BitNotExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: BitNotExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
    }
}
