import { FunctionCallExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class FunctionCallExpressionTree extends ExpressionTree {
    arguments: BaseTree[];
    function: BaseTree;

    constructor(public ctx: FunctionCallExpressionContext) {
        super();
        this.arguments = ctx._args.map(getExpressionTree);
        this.function = getExpressionTree(ctx._function);
    }

    toPlain() {
        return {
            ...super.toPlain(),
        };
    }
}
