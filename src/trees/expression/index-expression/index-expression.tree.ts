import { IndexExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class IndexExpressionTree extends ExpressionTree {
    value: ExpressionTree;
    index: ExpressionTree;

    constructor(public ctx: IndexExpressionContext) {
        super();
        this.value = getExpressionTree(ctx._value);
        this.index = getExpressionTree(ctx._index);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
            index: this.index.toPlain(),
        };
    }
}
