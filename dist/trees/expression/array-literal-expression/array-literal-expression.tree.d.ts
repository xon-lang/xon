import { ArrayLiteralExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class ArrayLiteralExpressionTree extends ExpressionTree {
    ctx: ArrayLiteralExpressionContext;
    items: ExpressionTree[];
    constructor(ctx: ArrayLiteralExpressionContext);
    toPlain(): {
        items: {
            type: string;
        }[];
        type: string;
    };
}
