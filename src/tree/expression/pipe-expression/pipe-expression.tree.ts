import { PipeExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class PipeExpressionTree extends ExpressionTree {
    arg: string;
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: PipeExpressionContext) {
        super();
        this.arg = ctx.ID()?.text;
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            argName: this.arg,
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
