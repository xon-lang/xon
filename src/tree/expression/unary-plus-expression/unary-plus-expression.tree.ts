import { UnaryPlusExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class UnaryPlusExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: UnaryPlusExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
    }
}
