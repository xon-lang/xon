import { EnumItemContext } from '../../../grammar/xon-parser';
import { evalExpression, parseExpression } from '../../../test-helper';
import { BaseTree } from '../../base.tree';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';

export class EnumItemTree extends BaseTree {
    name: string;
    value: any;
    step: ExpressionTree;
    prevArgName: string = '$';

    constructor(public ctx: EnumItemContext) {
        super();
        this.name = ctx._name.text;
        const valueExpression = ctx._value && getExpressionTree(ctx._value);
        const step = ctx._step && getExpressionTree(ctx._step);
        if (valueExpression) {
            this.value = evalExpression(valueExpression);
            if (!step) this.step = parseExpression(this.prevArgName + '+1');
        }
        if (step) {
            this.step = step;
            if (ctx._prev) this.prevArgName = ctx._prev.text;
            if (!valueExpression) this.value = 0;
        }
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            value: this.value,
            step: this.step.toPlain(),
        };
    }
}
