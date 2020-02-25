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

    getEnumItemValue(item: EnumItemTree, index: number, arr: EnumItemTree[]) {
        if (!item.expressionValue) {
            item.expressionValue =
                (arr[index - 1] && arr[index - 1].expressionValue) || parseExpression('$index');
        }

        item.value = evalExpression(item.expressionValue, {
            $index: index,
            $name: item.name,
            $prev: arr[index - 1]?.value,
        });
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            items: this.items.map(x => x.toPlain()),
        };
    }
}
