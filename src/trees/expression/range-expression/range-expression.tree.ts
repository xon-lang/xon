import { RangeExpressionContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class RangeExpressionTree extends ExpressionTree {
    start: ExpressionTree;
    end: ExpressionTree;
    step: ExpressionTree;

    constructor(public ctx: RangeExpressionContext) {
        super();
        this.start = getExpressionTree(ctx._startPos);
        this.end = getExpressionTree(ctx._end);
        this.step = ctx._step && getExpressionTree(ctx._step);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            start: this.start.toPlain(),
            end: this.end.toPlain(),
            step: this.step?.toPlain(),
        };
    }
}
