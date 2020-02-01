import { FunctionExpressionContext } from '../../../grammar/.antlr/XonParser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
export declare class FunctionExpressionTree extends ExpressionTree {
    ctx: FunctionExpressionContext;
    arguments: BaseTree[];
    object: ExpressionTree;
    constructor(ctx: FunctionExpressionContext);
    toPlain(): {
        type: string;
    };
}
