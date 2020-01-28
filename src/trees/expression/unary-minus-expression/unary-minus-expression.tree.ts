import { UnaryMinusExpressionContext } from '../../../grammar/.antlr/XonParser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class UnaryMinusExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: UnaryMinusExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
