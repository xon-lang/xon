import { CharacterLiteralExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
export declare class CharacterLiteralExpressionTree extends ExpressionTree {
    ctx: CharacterLiteralExpressionContext;
    value: string;
    constructor(ctx: CharacterLiteralExpressionContext);
    toPlain(): {
        value: string;
        type: string;
    };
}
