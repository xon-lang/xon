import { IndexExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class IndexExpressionTree extends ExpressionTree {
    ctx: IndexExpressionContext;
    value: ExpressionTree;
    index: ExpressionTree;
    constructor(ctx: IndexExpressionContext);
    toPlain(): {
        value: {
            type: string;
        };
        index: {
            type: string;
        };
        type: string;
    };
}
