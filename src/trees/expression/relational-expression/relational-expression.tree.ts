import { RelationalExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class RelationalExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;
    isLessThan: boolean;
    isLessThanEquals: boolean;
    isMoreThan: boolean;
    isMoreThanEquals: boolean;

    constructor(public ctx: RelationalExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
        this.isLessThan = !!ctx.LessThan();
        this.isLessThanEquals = !!ctx.LessThanEquals();
        this.isMoreThan = !!ctx.MoreThan();
        this.isMoreThanEquals = !!ctx.MoreThanEquals();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
            isLessThan: this.isLessThan,
            isLessThanEquals: this.isLessThanEquals,
            isMoreThan: this.isMoreThan,
            isGreaterThanEquals: this.isMoreThanEquals
        };
    }
}
