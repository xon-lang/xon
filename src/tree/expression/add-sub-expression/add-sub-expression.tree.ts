import { AddSubExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class AddSubExpressionTree extends ExpressionTree {
    operation: string;
    isPlus: boolean;
    isMinus: boolean;
    left: ExpressionTree;
    right: ExpressionTree;

    constructor(public ctx: AddSubExpressionContext) {
        super();

        this.operation = ctx._operation.text;
        this.isPlus = !!ctx.Plus();
        this.isMinus = !!ctx.Minus();
        this.left = getExpressionTree(ctx._left);
        this.right = getExpressionTree(ctx._right);
    }

    getType() {
        // const hasStrOperand = BaseTypes.String in [this.left, this.right].map(x=>x.getType().)
        // return createSimpleTreeType
        return null;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            operation: this.operation,
            isPlus: this.isPlus,
            isMinus: this.isMinus,
            left: this.left.toPlain(),
            right: this.right.toPlain(),
        };
    }
}
