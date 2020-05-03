import { getOperationType } from '../../../base-types';
import { MulDivModExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MulDivModExpressionTree extends ExpressionTree {
    operation: string;
    left: ExpressionTree;
    right: ExpressionTree;
    isMul: boolean;
    isDiv: boolean;
    isMod: boolean;

    constructor(public ctx: MulDivModExpressionContext) {
        super();
        this.operation = ctx._operation.text;
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
        this.isMul = !!ctx.Multiply();
        this.isDiv = !!ctx.Divide();
        this.isMod = !!ctx.Modulus();
    }

    getType() {
        return getOperationType(this.operation, this.left.getType(), this.right.getType());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            operation: this.operation,
            left: this.left.toPlain(),
            right: this.right.toPlain(),
            isMul: this.isMul,
            isDiv: this.isDiv,
            isMod: this.isMod,
        };
    }
}
