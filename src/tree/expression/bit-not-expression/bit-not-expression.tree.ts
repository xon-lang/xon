import { BitNotExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { BaseTypes } from '../../../base-types';

export class BitNotExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: BitNotExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
    }

    getType(){
        return BaseTypes.Integer
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        }
    }
}
