import { LiteralTree } from 'src/tree/literal/literal.tree';
import { EnumDefinitionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../../expression/expression.tree';
import { getLiteralTree } from '../../literal/literal-helper';

export class EnumDefinitionTree extends ExpressionTree {
    name: string;
    items: { name: string, value: string }[]

    constructor(public ctx: EnumDefinitionContext) {
        super();
        this.name = ctx.ID().text;

        const items = ctx.enumItem()
        this.items = items.map((x, i, arr) => ({
            name: x.ID().text,
            value: x.literal() && getLiteralTree(x.literal()).value
        }))

        this.items.forEach((x, i) => this.setEmptyOptionValue(x, i))
    }

    setEmptyOptionValue(option, index) {
        if (option.value) return;
        option.value = this.
    }

    getNextValue(current: string, literal: LiteralTree) {

    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            items: this.options
        };
    }
}
