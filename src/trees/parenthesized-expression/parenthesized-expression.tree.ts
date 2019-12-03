import { ParenthesizedExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';

export class ParenthesizedExpressionTree extends BaseTree {
    value: ExpressionTree;

    constructor(public ctx: ParenthesizedExpressionContext) {
        super();
        this.value = new ExpressionTree(ctx.expression());
    }

    toPlain() {
        return this.value.toPlain();
    }
}
