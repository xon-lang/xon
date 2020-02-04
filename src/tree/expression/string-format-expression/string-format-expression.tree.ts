import { StringFormatExpressionContext } from '../../../grammar/xon-parser';
import { parseExpression } from '../../../test-helper';
import { ExpressionTree } from '../expression.tree';

export class StringFormatExpressionTree extends ExpressionTree {
    value: string;

    constructor(public ctx: StringFormatExpressionContext) {
        super();

        this.value = ctx.StringFormat().text.slice(2, -1);
    }

    getString(fn: (ExpressionTree) => string) {
        return this.value.replace(/\{(.*?)\}/g, (z, x) => fn(parseExpression(x.slice())));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            right: this.value,
        };
    }
}
