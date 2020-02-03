import { BitShiftExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class BitShiftExpressionTree extends ExpressionTree {
    operation: string;
    isLeftShiftArithmetic: boolean;
    isRightShiftArithmetic: boolean;
    isRightShiftLogical: boolean;
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: BitShiftExpressionContext) {
        super();
        this.operation = ctx._operation.text;
        this.isLeftShiftArithmetic = !!ctx.LeftShiftArithmetic();
        this.isRightShiftArithmetic = !!ctx.RightShiftArithmetic();
        this.isRightShiftLogical = !!ctx.RightShiftLogical();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            operation: this.operation,
            isLeftShiftArithmetic: this.isLeftShiftArithmetic,
            isRightShiftArithmetic: this.isRightShiftArithmetic,
            isRightShiftLogical: this.isRightShiftLogical,
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
