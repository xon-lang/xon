import { UnaryExpressionContext } from '../../../grammar/.antlr/XonParser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class UnaryExpressionTree extends ExpressionTree {
    value: ExpressionTree;
    isPlus: boolean;
    isMinus: boolean;
    isLogicalNot: boolean;
    isBitNot: boolean;

    constructor(public ctx: UnaryExpressionContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
        this.isPlus = !!ctx.Plus();
        this.isMinus = !!ctx.Minus();
        this.isLogicalNot = !!ctx.Not();
        this.isBitNot = !!ctx.BitNot();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
            isPlus: this.isPlus,
            isMinus: this.isMinus,
            isLogicalNot: this.isLogicalNot,
            isBitNot: this.isPlus,
        };
    }
}
