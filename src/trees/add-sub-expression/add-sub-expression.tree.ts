import { AddSubExpressionContext } from '../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class AddSubExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;
    operation: string;
    isAdd: boolean;

    constructor(public ctx: AddSubExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
        this.operation = ctx.Minus() ? 'sub' : 'add';
        this.isAdd = !!ctx.Plus();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
