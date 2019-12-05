import { StringLiteralExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class StringLiteralExpressionTree extends ExpressionTree {
    value: string;

    constructor(public ctx: StringLiteralExpressionContext) {
        super();
        this.value = ctx.StringLiteral().text.slice(1, -1);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
