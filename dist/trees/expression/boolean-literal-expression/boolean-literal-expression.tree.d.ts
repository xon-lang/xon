import { BooleanLiteralExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class BooleanLiteralExpressionTree extends ExpressionTree {
    ctx: BooleanLiteralExpressionContext;
    value: string;
    constructor(ctx: BooleanLiteralExpressionContext);
    toPlain(): {
        value: string;
        type: string;
    };
}
