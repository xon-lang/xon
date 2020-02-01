import { LogicalOrExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class LogicalOrExpressionTree extends ExpressionTree {
    ctx: LogicalOrExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    constructor(ctx: LogicalOrExpressionContext);
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
