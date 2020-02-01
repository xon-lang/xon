import { AddSubExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class AddSubExpressionTree extends ExpressionTree {
    ctx: AddSubExpressionContext;
    left: ExpressionTree;
    right: ExpressionTree;
    isPlus: boolean;
    isMinus: boolean;
    constructor(ctx: AddSubExpressionContext);
    toPlain(): {
        left: {
            type: string;
        };
        right: {
            type: string;
        };
        isAdd: boolean;
        isMinus: boolean;
        type: string;
    };
}
