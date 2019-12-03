import { IntegerLiteralExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class IntegerLiteralExpressionTree extends BaseTree {
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
