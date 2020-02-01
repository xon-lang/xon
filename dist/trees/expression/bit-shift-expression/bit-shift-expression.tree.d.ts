import { BitShiftExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class BitShiftExpressionTree extends ExpressionTree {
    ctx: BitShiftExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    isLeftShiftArithmetic: boolean;
    isRightShiftArithmetic: boolean;
    isRightShiftLogical: boolean;
    constructor(ctx: BitShiftExpressionContext);
    toPlain(): {
        isLeftShiftArithmetic: boolean;
        isRightShiftArithmetic: boolean;
        isRightShiftLogical: boolean;
        type: string;
    };
}
