import { SchemeDefinitionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../../expression/expression.tree';
import { SchemeItemTree } from './scheme-item.tree';

export class SchemeDefinitionTree extends ExpressionTree {
    name: string;
    items: SchemeItemTree[];

    constructor(public ctx: SchemeDefinitionContext) {
        super();
        this.name = ctx.ID().text;
        this.items = ctx.schemeItem().map(x => new SchemeItemTree(x));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            items: this.items.map(x => x.toPlain()),
        };
    }
}
