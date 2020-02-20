import { EnumDefinitionContext } from '../../../grammar/xon-parser';
import { evalExpression, parseExpression } from '../../../test-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { EnumItemTree } from './enum-item.tree';

export class EnumDefinitionTree extends ExpressionTree {
    name: string;
    items: EnumItemTree[];

    constructor(public ctx: EnumDefinitionContext) {
        super();
        this.name = ctx.ID().text;

        const items = ctx.enumItem();
        this.items = items.map(x => new EnumItemTree(x));
        this.items.forEach(this.getEnumItemValue.bind(this));
    }

    getEnumItemValue(item: EnumItemTree, index, arr) {
        if (item.value !== undefined) return;

        if (index == 0) {
            item.value = 0;
            item.step = parseExpression(item.prevArgName + '+1');
        } else {
            const prevItem = arr[index - 1];
            item.value = evalExpression(prevItem.step, { [prevItem.prevArgName]: prevItem.value });
            item.step = prevItem.step;
            item.prevArgName = prevItem.prevArgName;
        }
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            items: this.items.map(x => x.toPlain()),
        };
    }
}
