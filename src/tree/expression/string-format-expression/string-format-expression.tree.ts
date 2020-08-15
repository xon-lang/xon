import { BaseTypes } from '../../../base-types';
import { StringFormatExpressionContext } from '../../../grammar/xon-parser';
import { parseExpression } from '../../../parse';
import { ExpressionTree } from '../expression.tree';

export class StringFormatExpressionTree extends ExpressionTree {
    value: ExpressionTree;

    constructor(public ctx: StringFormatExpressionContext) {
        super();

        let expressionCode = ctx.text
            .slice(1)
            .replace(/\{(.*?)\}/g, (z, x) => "' + (" + x + ") + '")
            .replace(/\+ '' \+/g, '+')
            .replace(/'' \+/, '')
            .replace(/\+ ''$/, '')
            .trim();

        this.value = parseExpression(expressionCode);
    }

    getType() {
        return BaseTypes.String;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
