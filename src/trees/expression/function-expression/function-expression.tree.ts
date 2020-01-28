import { FunctionExpressionContext } from '../../../grammar/.antlr/XonParser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class FunctionExpressionTree extends ExpressionTree {
    arguments: BaseTree[];
    object: ExpressionTree;

    constructor(public ctx: FunctionExpressionContext) {
        super();
        this.arguments = ctx._args.map(getExpressionTree);
        this.object = getExpressionTree(ctx._object);
    }

    toPlain() {
        return {
            ...super.toPlain(),
        };
    }
}
