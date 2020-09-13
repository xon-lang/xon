import { StringFormatExpressionContext } from '../../../grammar/xon-parser';
import { parseExpression } from '../../../parse';
import { ExpressionTree } from '../expression.tree';
import { ParenthesizedExpressionTree } from '../parenthesized-expression/parenthesized-expression.tree';

export class StringFormatExpressionTree extends ExpressionTree {
    valueString: string;
    value: ParenthesizedExpressionTree;

    constructor(public ctx: StringFormatExpressionContext) {
        super();

        this.valueString = ctx.text
            .slice(1)
            .replace(/\{(.*?)\}/g, (z, x) => "' + (" + x + ") + '")
            .replace(/\+ '' \+/g, '+')
            .replace(/'' \+/, '')
            .replace(/\+ ''$/, '')
            .trim();

        this.value = parseExpression(`(${this.valueString})`);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            valueString: this.valueString,
            value: this.value.toPlain(),
        };
    }
}
