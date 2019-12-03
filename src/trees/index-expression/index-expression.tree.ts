import { IndexExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class IndexExpressionTree extends BaseTree {
    objectExpression: BaseTree;

    constructor(public ctx: IndexExpressionContext) {
        super();
        // this.objectExpression = ctx.ID().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            // name: this.name,
        };
    }
}
