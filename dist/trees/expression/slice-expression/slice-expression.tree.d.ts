import { SliceExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class SliceExpressionTree extends ExpressionTree {
    ctx: SliceExpressionContext;
    value: ExpressionTree;
    start: ExpressionTree;
    end: ExpressionTree;
    step: ExpressionTree;
    constructor(ctx: SliceExpressionContext);
    toPlain(): {
        value: {
            type: string;
        };
        start: {
            type: string;
        };
        end: {
            type: string;
        };
        step: {
            type: string;
        };
        type: string;
    };
}
