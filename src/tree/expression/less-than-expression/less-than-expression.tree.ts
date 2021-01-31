import { RelationalExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LessThanExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: RelationalExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
    }
}
