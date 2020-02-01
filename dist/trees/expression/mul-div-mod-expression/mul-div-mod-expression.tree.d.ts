import { MulDivModExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class MulDivModExpressionTree extends ExpressionTree {
    ctx: MulDivModExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    isMul: boolean;
    isDiv: boolean;
    isMod: boolean;
    constructor(ctx: MulDivModExpressionContext);
    toPlain(): {
        left: {
            type: string;
        };
        right: {
            type: string;
        };
        isMul: boolean;
        isDiv: boolean;
        isMod: boolean;
        type: string;
    };
}
