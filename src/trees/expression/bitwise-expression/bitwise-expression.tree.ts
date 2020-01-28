import { BitwiseExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class BitwiseExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;
    isAnd: boolean;
    isOr: boolean;
    isXor: boolean;
    isLeftShiftArithmetic: boolean;
    isRightShiftArithmetic: boolean;
    isRightShiftLogical: boolean;

    constructor(public ctx: BitwiseExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
        this.isAnd = !!ctx.BitAnd();
        this.isOr = !!ctx.BitOr();
        this.isXor = !!ctx.BitXor();
        this.isLeftShiftArithmetic = !!ctx.LeftShiftArithmetic();
        this.isRightShiftArithmetic = !!ctx.RightShiftArithmetic();
        this.isRightShiftLogical = !!ctx.RightShiftLogical();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
            isAnd: this.isAnd,
            isOr: this.isOr,
            isXor: this.isXor,
            isLeftShiftArithmetic: this.isLeftShiftArithmetic,
            isRightShiftArithmetic: this.isRightShiftArithmetic,
            isRightShiftLogical: this.isRightShiftLogical,
        };
    }
}
