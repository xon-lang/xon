import { ArrayLiteralExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';

export class ArrayLiteralExpressionTree extends BaseTree {
    items: BaseTree[];

    constructor(public ctx: ArrayLiteralExpressionContext) {
        super();
        this.items = ctx._items.map(x => new ExpressionTree(x).value);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            items: this.items.map(x => x.toPlain()),
        };
    }
}
