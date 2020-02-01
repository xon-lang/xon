import { LogicalNotExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class LogicalNotExpressionTree extends ExpressionTree {
    ctx: LogicalNotExpressionContext;
    value: ExpressionTree;
    constructor(ctx: LogicalNotExpressionContext);
    toPlain(): {
        value: {
            type: string;
        };
        type: string;
    };
}
