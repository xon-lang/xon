import { UnaryPlusExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class UnaryPlusExpressionTree extends ExpressionTree {
    ctx: UnaryPlusExpressionContext;
    value: ExpressionTree;
    constructor(ctx: UnaryPlusExpressionContext);
    toPlain(): {
        value: {
            type: string;
        };
        type: string;
    };
}
