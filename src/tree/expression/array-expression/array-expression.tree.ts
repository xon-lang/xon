import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { createArrayTreeType } from '../../type/type-helper';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
    items: ExpressionTree[];

    constructor(public ctx?: ArrayExpressionContext) {
        super();
        this.items = ctx?._items.map(getExpressionTree);
    }

    getType() {
        return createArrayTreeType(this.items[0]?.getType());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            items: this.items.map((x) => x.toPlain()),
        };
    }
}
