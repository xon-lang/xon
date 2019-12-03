import { BooleanLiteralExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class BooleanLiteralExpressionTree extends BaseTree {
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
