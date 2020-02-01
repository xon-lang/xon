import { PipeExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class PipeExpressionTree extends ExpressionTree {
    ctx: PipeExpressionContext;
    arg: string;
    left: ExpressionTree;
    right: ExpressionTree;
    constructor(ctx: PipeExpressionContext);
    toPlain(): {
        argName: string;
        left: {
            type: string;
        };
        right: {
            type: string;
        };
        type: string;
    };
}
