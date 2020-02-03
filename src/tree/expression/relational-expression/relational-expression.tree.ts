import { RelationalExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class RelationalExpressionTree extends ExpressionTree {
    operation: string;
    isLessThan: boolean;
    isLessThanEquals: boolean;
    isMoreThan: boolean;
    isMoreThanEquals: boolean;
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: RelationalExpressionContext) {
        super();
        this.operation = ctx._operation.text;
        this.isLessThan = !!ctx.LessThan();
        this.isLessThanEquals = !!ctx.LessThanEquals();
        this.isMoreThan = !!ctx.MoreThan();
        this.isMoreThanEquals = !!ctx.MoreThanEquals();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            operation: this.operation,
            isLessThan: this.isLessThan,
            isLessThanEquals: this.isLessThanEquals,
            isMoreThan: this.isMoreThan,
            isGreaterThanEquals: this.isMoreThanEquals,
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
