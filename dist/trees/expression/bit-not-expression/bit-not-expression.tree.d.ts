import { BitNotExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class BitNotExpressionTree extends ExpressionTree {
    ctx: BitNotExpressionContext;
    value: ExpressionTree;
    constructor(ctx: BitNotExpressionContext);
    toPlain(): {
        value: {
            type: string;
        };
        type: string;
    };
}
