import { EqualityExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class EqualityExpressionTree extends ExpressionTree {
    operation: string;
    isEquals: boolean;
    isNotEquals: boolean;
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: EqualityExpressionContext) {
        super();
        this.operation = ctx._operation.text;
        this.isEquals = !!ctx.Equals();
        this.isNotEquals = !!ctx.NotEquals();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            operation: this.operation,
            isEquals: this.isEquals,
            isNotEquals: this.isNotEquals,
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
