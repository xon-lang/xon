import { BooleanLiteralExpressionContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class BooleanLiteralExpressionTree extends ExpressionTree {
    value: string;

    constructor(public ctx: BooleanLiteralExpressionContext) {
        super();
        this.value = ctx.BooleanLiteral().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
