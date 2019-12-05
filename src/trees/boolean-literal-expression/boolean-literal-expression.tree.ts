import { BooleanLiteralExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class BooleanLiteralExpressionTree extends ExpressionTree {
    value: string;

    constructor(public ctx: BooleanLiteralExpressionContext) {
        super();
        this.value = ctx.BooleanLiteral().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
