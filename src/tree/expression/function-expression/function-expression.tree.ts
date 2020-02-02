import { FunctionExpressionContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class FunctionExpressionTree extends ExpressionTree {
    args: ExpressionTree[];
    object: ExpressionTree;

    constructor(public ctx: FunctionExpressionContext) {
        super();
        this.args = ctx._args.map(getExpressionTree);
        this.object = getExpressionTree(ctx._object);
    }

    toPlain() {
        return {
            ...super.toPlain(),
        };
    }
}
