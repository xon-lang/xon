import { IntegerLiteralExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class IntegerLiteralExpressionTree extends ExpressionTree {
    value: string;

    constructor(public ctx: IntegerLiteralExpressionContext) {
        super();
        this.value = ctx.DecimalLiteral().text.replace(/_/g, '');
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
