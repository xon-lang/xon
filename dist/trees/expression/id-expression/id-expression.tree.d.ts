import { IdExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class IdExpressionTree extends ExpressionTree {
    ctx: IdExpressionContext;
    id: string;
    constructor(ctx: IdExpressionContext);
    toPlain(): {
        id: string;
        type: string;
    };
}
