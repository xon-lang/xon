import { FloatLiteralExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class FloatLiteralExpressionTree extends ExpressionTree {
    ctx: FloatLiteralExpressionContext;
    value: string;
    constructor(ctx: FloatLiteralExpressionContext);
    toPlain(): {
        type: string;
        value: string;
    };
}
