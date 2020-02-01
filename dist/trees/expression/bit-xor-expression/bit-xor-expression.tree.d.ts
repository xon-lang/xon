import { BitXorExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class BitXorExpressionTree extends ExpressionTree {
    ctx: BitXorExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    constructor(ctx: BitXorExpressionContext);
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
