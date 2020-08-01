import { FunctionExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { BaseTypes } from '../../../base-types';

export class FunctionExpressionTree extends ExpressionTree {
    args: ExpressionTree[];
    object: ExpressionTree;

    constructor(public ctx: FunctionExpressionContext) {
        super();
        this.args = ctx._args.map(getExpressionTree);
        this.object = getExpressionTree(ctx._object);
    }

    getType(){
        return BaseTypes.Undefined
    }

    toPlain() {
        return {
            ...super.toPlain(),
            args: this.args.map(x => x.toPlain()),
            object: this.object.toPlain(),
        };
    }
}
