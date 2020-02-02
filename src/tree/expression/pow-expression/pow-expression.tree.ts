import { PowExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class PowExpressionTree extends ExpressionTree {
    base: ExpressionTree;
    exponent: ExpressionTree;

    constructor(public ctx: PowExpressionContext) {
        super();
        this.base = getExpressionTree(ctx._base);
        this.exponent = getExpressionTree(ctx._exponent);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            base: this.base.toPlain(),
            exponent: this.exponent.toPlain(),
        };
    }
}
