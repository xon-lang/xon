import { RelationalExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class RelationalExpressionTree extends ExpressionTree {
    ctx: RelationalExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    isLessThan: boolean;
    isLessThanEquals: boolean;
    isMoreThan: boolean;
    isMoreThanEquals: boolean;
    constructor(ctx: RelationalExpressionContext);
    toPlain(): {
        left: {
            type: string;
        };
        right: {
            type: string;
        };
        isLessThan: boolean;
        isLessThanEquals: boolean;
        isMoreThan: boolean;
        isGreaterThanEquals: boolean;
        type: string;
    };
}
