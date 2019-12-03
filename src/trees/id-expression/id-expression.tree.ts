import { IdExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class IdExpressionTree extends BaseTree {
    id: string;

    constructor(public ctx: IdExpressionContext) {
        super();
        this.id = ctx.ID().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            id: this.id,
        };
    }
}
