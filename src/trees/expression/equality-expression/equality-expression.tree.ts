import { EqualityExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class EqualityExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;
    isEquals: boolean;
    isNotEquals: boolean;

    constructor(public ctx: EqualityExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
        this.isEquals = !!ctx.Equals();
        this.isNotEquals = !!ctx.NotEquals();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
            isEquals: this.isEquals,
            isNotEquals: this.isNotEquals,
        };
    }
}
