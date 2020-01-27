import { ParenthesizedExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class ParenthesizedExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: ParenthesizedExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
    }

    toPlain() {
        return this.value.toPlain();
    }
}
