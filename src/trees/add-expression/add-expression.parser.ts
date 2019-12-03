import { AddExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseParser } from '../base.parser';
import { ExpressionParser } from '../expression/expression.parser';

export class AddExpressionParser extends BaseParser {
    left: ExpressionParser;
    right: ExpressionParser;

    constructor(public ctx: AddExpressionContext) {
        super();
        this.left = new ExpressionParser(ctx._left);
        this.right = new ExpressionParser(ctx._right);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
``;
