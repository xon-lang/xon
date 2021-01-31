import { BitOrExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class BitOrExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: BitOrExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
    }
}
