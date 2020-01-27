import { PropertyExpressionContext } from '../../../grammar/.antlr/XonParser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class PropertyExpressionTree extends ExpressionTree {
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
