import { ParenthesizedExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';

export class ParenthesizedExpressionTree extends BaseTree {
    value: BaseTree;

    constructor(public ctx: ParenthesizedExpressionContext) {
        super();
        this.value = new ExpressionTree(ctx.expression()).value;
    }

    toPlain() {
        return this.value.toPlain();
    }
}
