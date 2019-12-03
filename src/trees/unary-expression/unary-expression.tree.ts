import { UnaryExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';

export class UnaryExpressionTree extends BaseTree {
    value: ExpressionTree;

    constructor(public ctx: UnaryExpressionContext) {
        super();
        this.value = new ExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
