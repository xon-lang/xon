import { ArrayLiteralExpressionContext } from '../../../grammar/.antlr/XonParser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class ArrayLiteralExpressionTree extends ExpressionTree {
    items: ExpressionTree[];

    constructor(public ctx: ArrayLiteralExpressionContext) {
        super();
        this.items = ctx._items.map(getExpressionTree);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            items: this.items.map(x => x.toPlain()),
        };
    }
}
