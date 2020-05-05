import { BaseTypes } from '../../../base-types';
import { UnaryMinusExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class UnaryMinusExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: UnaryMinusExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
    }

    getType() {
        return BaseTypes.Integer;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
