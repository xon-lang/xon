import { SchemeItemContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';

export class SchemeItemTree extends BaseTree {
    name: string;
    valueType: string;
    value: ExpressionTree;
    items: SchemeItemTree[];

    constructor(public ctx: SchemeItemContext) {
        super();
        this.name = ctx._name.text;
        this.valueType = ctx._valueType && ctx._valueType.text;
        this.value = ctx._value && getExpressionTree(ctx._value);
        this.items = ctx.schemeItem() && ctx.schemeItem().map(x => new SchemeItemTree(x));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            type: this.type,
            value: this.value?.toPlain(),
            items: this.items.map(x => x.toPlain()),
        };
    }
}
