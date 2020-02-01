import { IdExpressionContext } from '../../../grammar/.antlr/XonParser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class IdExpressionTree extends ExpressionTree {
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
