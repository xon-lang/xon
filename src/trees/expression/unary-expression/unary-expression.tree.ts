import { UnaryExpressionContext } from '../../../grammar/.antlr/XonParser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class UnaryExpressionTree extends ExpressionTree {
    value: ExpressionTree;
    isMinus: boolean;

    constructor(public ctx: UnaryExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
        this.isMinus = !!ctx.Minus();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
