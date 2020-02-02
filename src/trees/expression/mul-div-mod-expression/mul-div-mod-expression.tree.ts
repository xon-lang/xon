import { MulDivModExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class MulDivModExpressionTree extends ExpressionTree {
    left: ExpressionTree;
    right: ExpressionTree;
    isMul: boolean;
    isDiv: boolean;
    isMod: boolean;

    constructor(public ctx: MulDivModExpressionContext) {
        super();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
        this.isMul = !!ctx.Multiply();
        this.isDiv = !!ctx.Divide();
        this.isMod = !!ctx.Modulus();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            left: this.left.toPlain(),
            right: this.right.toPlain(),
            isMul: this.isMul,
            isDiv: this.isDiv,
            isMod: this.isMod,
        };
    }
}
