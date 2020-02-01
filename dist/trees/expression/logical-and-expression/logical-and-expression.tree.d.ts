import { LogicalAndExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class LogicalAndExpressionTree extends ExpressionTree {
    ctx: LogicalAndExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    constructor(ctx: LogicalAndExpressionContext);
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
