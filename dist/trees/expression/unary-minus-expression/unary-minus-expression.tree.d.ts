import { UnaryMinusExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class UnaryMinusExpressionTree extends ExpressionTree {
    ctx: UnaryMinusExpressionContext;
    value: ExpressionTree;
    constructor(ctx: UnaryMinusExpressionContext);
    toPlain(): {
        value: {
            type: string;
        };
        type: string;
    };
}
