import { ParenthesizedExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseParser } from '../base.parser';
import { ExpressionParser } from '../expression/expression.parser';

export class ParenthesizedExpressionParser extends BaseParser {
    value: ExpressionParser;

    constructor(public ctx: ParenthesizedExpressionContext) {
        super();
        this.value = new ExpressionParser(ctx.expression());
    }

    toPlain() {
        return this.value.toPlain();
    }
}
