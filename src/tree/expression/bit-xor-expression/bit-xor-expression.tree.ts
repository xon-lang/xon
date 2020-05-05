import { BitXorExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { BaseTypes } from '../../../base-types';

export class BitXorExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: BitXorExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
    }


    getType(){
        return BaseTypes.Integer
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
