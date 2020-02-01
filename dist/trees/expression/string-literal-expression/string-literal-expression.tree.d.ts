import { StringLiteralExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class StringLiteralExpressionTree extends ExpressionTree {
    ctx: StringLiteralExpressionContext;
    value: string;
    constructor(ctx: StringLiteralExpressionContext);
    toPlain(): {
        value: string;
        type: string;
    };
}
