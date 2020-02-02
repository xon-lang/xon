import { BitShiftExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class BitShiftExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;

    isLeftShiftArithmetic: boolean;
    isRightShiftArithmetic: boolean;
    isRightShiftLogical: boolean;

    constructor(public ctx: BitShiftExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
        this.isLeftShiftArithmetic = !!ctx.LeftShiftArithmetic();
        this.isRightShiftArithmetic = !!ctx.RightShiftArithmetic();
        this.isRightShiftLogical = !!ctx.RightShiftLogical();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            isLeftShiftArithmetic: this.isLeftShiftArithmetic,
            isRightShiftArithmetic: this.isRightShiftArithmetic,
            isRightShiftLogical: this.isRightShiftLogical,
        };
    }
}
