import { BaseTypes } from '../../../base-types';
import { RangeExpressionContext } from '../../../grammar/xon-parser';
import { createArrayTreeType } from '../../type/type-helper';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

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

    getType() {
        return createArrayTreeType(BaseTypes.Integer);
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
