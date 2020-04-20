import { IndexExpressionContext, SliceExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class SliceExpressionTree extends ExpressionTree {
    value: ExpressionTree;
    start: ExpressionTree;
    end: ExpressionTree;
    step: ExpressionTree;

    constructor(public ctx: SliceExpressionContext) {
        super();
        this.value = getExpressionTree(ctx._value);
        this.start = getExpressionTree(ctx._startPos);
        this.end = getExpressionTree(ctx._endPos);
        this.step = ctx._step && getExpressionTree(ctx._step);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
            start: this.start.toPlain(),
            end: this.end.toPlain(),
            step: this.step?.toPlain(),
        };
    }
}
