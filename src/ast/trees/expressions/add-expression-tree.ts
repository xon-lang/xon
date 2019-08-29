import { AddExpressionContext } from '../../../grammar/generated/AsmParser';
import { ExpressionTree } from '../expression-tree';

export class AddExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: AddExpressionContext) {
        this.left = new ExpressionTree(ctx._left);
        this.right = new ExpressionTree(ctx._right);
    }

    toPlane() {
        const o = {
            left: this.left.toPlane(),
            right: this.left.toPlane(),
        };
        return o;
    }
}
