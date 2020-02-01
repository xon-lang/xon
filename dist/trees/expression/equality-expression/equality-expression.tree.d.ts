import { EqualityExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class EqualityExpressionTree extends ExpressionTree {
    ctx: EqualityExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    isEquals: boolean;
    isNotEquals: boolean;
    constructor(ctx: EqualityExpressionContext);
    toPlain(): {
        left: {
            type: string;
        };
        right: {
            type: string;
        };
        isEquals: boolean;
        isNotEquals: boolean;
        type: string;
    };
}
