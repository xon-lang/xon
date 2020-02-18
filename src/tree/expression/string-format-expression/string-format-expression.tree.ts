import { StringFormatExpressionContext } from '../../../grammar/xon-parser';
import { parseExpression } from '../../../test-helper';
import { ExpressionTree } from '../expression.tree';

export class StringFormatExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: StringFormatExpressionContext) {
        super();

        const expressionCode = ctx.text
            .slice(1)
            .replace(/\{(.*?)\}/g, (z, x) => "' + (" + x + ") + '")
            .replace(/\+ '' \+/g, '')
            .replace(/^'' \+/, '')
            .replace(/\+ ''$/, '');
        this.value = parseExpression(expressionCode);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
