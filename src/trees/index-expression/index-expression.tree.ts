import { IndexExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';

export class IndexExpressionTree extends BaseTree {
    objectExpression: BaseTree;
    indexExpression: BaseTree;

    constructor(public ctx: IndexExpressionContext) {
        super();
        this.objectExpression = new ExpressionTree(ctx._object).value;
        this.indexExpression = new ExpressionTree(ctx._index).value;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            // name: this.name,
        };
    }
}
