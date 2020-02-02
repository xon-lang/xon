import { FloatLiteralExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class FloatLiteralExpressionTree extends ExpressionTree {
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
