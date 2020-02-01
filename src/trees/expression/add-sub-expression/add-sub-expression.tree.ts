import { AddSubExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class AddSubExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;
    isPlus: boolean;
    isMinus: boolean;

    constructor(public ctx: AddSubExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
        this.isPlus = !!ctx.Plus();
        this.isMinus = !!ctx.Minus();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
            isAdd: this.isPlus,
            isMinus: this.isMinus
        };
    }
}
