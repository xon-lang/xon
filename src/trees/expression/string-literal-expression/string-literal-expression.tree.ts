import { StringLiteralExpressionContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class StringLiteralExpressionTree extends ExpressionTree {
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
