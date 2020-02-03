import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
    items: ExpressionTree[];

    constructor(public ctx: ArrayExpressionContext) {
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
