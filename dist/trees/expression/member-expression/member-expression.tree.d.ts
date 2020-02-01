import { MemberExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class MemberExpressionTree extends ExpressionTree {
    ctx: MemberExpressionContext;
    name: string;
    constructor(ctx: MemberExpressionContext);
    toPlain(): {
        name: string;
        type: string;
    };
}
