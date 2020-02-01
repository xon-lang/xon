import { BitAndExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class BitAndExpressionTree extends ExpressionTree {
    ctx: BitAndExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    constructor(ctx: BitAndExpressionContext);
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
