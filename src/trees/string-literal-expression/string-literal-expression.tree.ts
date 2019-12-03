import { StringLiteralExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class StringLiteralExpressionTree extends BaseTree {
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
