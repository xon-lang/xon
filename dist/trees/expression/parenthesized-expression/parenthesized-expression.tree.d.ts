import { ParenthesizedExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class ParenthesizedExpressionTree extends ExpressionTree {
    ctx: ParenthesizedExpressionContext;
    value: ExpressionTree;
    constructor(ctx: ParenthesizedExpressionContext);
    toPlain(): {
        type: string;
    };
}
