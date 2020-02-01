import { PowExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class PowExpressionTree extends ExpressionTree {
    ctx: PowExpressionContext;
    base: ExpressionTree;
    exponent: ExpressionTree;
    constructor(ctx: PowExpressionContext);
    toPlain(): {
        base: {
            type: string;
        };
        exponent: {
            type: string;
        };
        type: string;
    };
}
