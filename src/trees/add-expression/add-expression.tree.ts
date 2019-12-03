import { AddExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';

export class AddExpressionTree extends BaseTree {
    left: BaseTree;
    right: BaseTree;

    constructor(public ctx: AddExpressionContext) {
        super();
        this.left = new ExpressionTree(ctx._left).value;
        this.right = new ExpressionTree(ctx._right).value;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
``;
