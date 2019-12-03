import { PropertyExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class PropertyExpressionTree extends BaseTree {
    name: string;

    constructor(public ctx: PropertyExpressionContext) {
        super();
        this.name = ctx.ID().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
        };
    }
}
