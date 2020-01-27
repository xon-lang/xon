import { MulDivExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class MulDivExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;
    operation: string;
    isMul: boolean;

    constructor(public ctx: MulDivExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
        this.operation = ctx.Divide() ? 'div' : 'mul';
        this.isMul = !!ctx.Multiply();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
