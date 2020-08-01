import { getOperationType } from '../../../base-types';
import { PowExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class PowExpressionTree extends ExpressionTree {
    base: ExpressionTree;
    exponent: ExpressionTree;

    constructor(public ctx: PowExpressionContext) {
        super();
        this.base = getExpressionTree(ctx._base);
        this.exponent = getExpressionTree(ctx._exponent);
    }

    getType() {
        return getOperationType(this.ctx.Pow().text, this.base.getType(), this.exponent.getType());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            base: this.base.toPlain(),
            exponent: this.exponent.toPlain(),
        };
    }
}
