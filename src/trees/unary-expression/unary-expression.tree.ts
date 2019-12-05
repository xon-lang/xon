import { UnaryExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class UnaryExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: UnaryExpressionContext) {
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
