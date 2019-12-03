import { FunctionCallExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';

export class FunctionCallExpressionTree extends BaseTree {
    arguments: BaseTree[];
    function: BaseTree;

    constructor(public ctx: FunctionCallExpressionContext) {
        super();
        this.arguments = ctx._args.map(x => new ExpressionTree(x).value);
        this.function = new ExpressionTree(ctx._function).value;
    }

    toPlain() {
        return {
            ...super.toPlain(),
        };
    }
}
