import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
    items: { value: ExpressionTree; hasSpread: boolean }[];

    constructor(public ctx?: ArrayExpressionContext) {
        super();
        this.items = ctx
            ?.spreadItem()
            .map((x, i) => ({ value: getExpressionTree(x.expression()), hasSpread: !!x.Elipsis() }));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            items: this.items.map((x) => ({
                value: x.value.toPlain(),
                hasSpread: x.hasSpread,
            })),
        };
    }
}
