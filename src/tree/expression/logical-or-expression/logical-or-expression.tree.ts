import { LogicalOrExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { BaseTypes } from '../../../base-types';

export class LogicalOrExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: LogicalOrExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
    }

    getType(){
        return BaseTypes.Any
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
