import { LambdaExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class LambdaExpressionTree extends ExpressionTree {
    ctx: LambdaExpressionContext;
    args: string[];
    body: ExpressionTree;
    constructor(ctx: LambdaExpressionContext);
    toPlain(): {
        args: string[];
        body: {
            type: string;
        };
        type: string;
    };
}
