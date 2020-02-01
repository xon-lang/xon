import { RangeExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class RangeExpressionTree extends ExpressionTree {
    ctx: RangeExpressionContext;
    start: ExpressionTree;
    end: ExpressionTree;
    step: ExpressionTree;
    constructor(ctx: RangeExpressionContext);
    toPlain(): {
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
