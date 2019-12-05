import { IndexExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class IndexExpressionTree extends ExpressionTree {
    objectExpression: BaseTree;
    indexExpression: BaseTree;

    constructor(public ctx: IndexExpressionContext) {
        super();
        this.objectExpression = getExpressionTree(ctx._object);
        this.indexExpression = getExpressionTree(ctx._index);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            // name: this.name,
        };
    }
}
