import { BitOrExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class BitOrExpressionTree extends ExpressionTree {
    ctx: BitOrExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    constructor(ctx: BitOrExpressionContext);
    toPlain(): {
        left: {
            type: string;
        };
        right: {
            type: string;
        };
        type: string;
    };
}
