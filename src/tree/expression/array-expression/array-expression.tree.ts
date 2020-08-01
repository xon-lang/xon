import { BaseTypes } from '../../../base-types';
import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { createArrayTreeType } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
    items: { hasSpread: boolean; value: ExpressionTree }[];

    constructor(public ctx?: ArrayExpressionContext) {
        super();
        this.items = ctx?._items.map((x, i) => ({
            hasSpread: !!ctx.Spread(i),
            value: getExpressionTree(x),
        }));
    }

    getType() {
        let baseType: TypeTree = BaseTypes.Undefined;
        if (
            !this.items.length ||
            this.items.some((x) => !x.value.getType().eq(this.items[0].value.getType()))
        )
            baseType = BaseTypes.Any;
        else baseType = this.items[0].value.getType();

        return createArrayTreeType(baseType);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            items: this.items.map((x) => x.value.toPlain()),
        };
    }
}
