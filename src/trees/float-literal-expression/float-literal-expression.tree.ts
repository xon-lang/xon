import { FloatLiteralExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class FloatLiteralExpressionTree extends BaseTree {
    value: string;

    constructor(public ctx: FloatLiteralExpressionContext) {
        super();
        this.value = ctx.FloatLiteral().text.replace(/_/g, '');
    }

    toPlain() {
        return {
            type: 'FloatLiteralExpression',
            value: this.value,
        };
    }
}
