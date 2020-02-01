import { IntegerLiteralExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class IntegerLiteralExpressionTree extends ExpressionTree {
    ctx: IntegerLiteralExpressionContext;
    value: string;
    constructor(ctx: IntegerLiteralExpressionContext);
    toPlain(): {
        value: string;
        type: string;
    };
}
