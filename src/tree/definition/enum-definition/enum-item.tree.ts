import { EnumItemContext } from '../../../grammar/xon-parser';
import { BaseTree } from '../../base.tree';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';

export class EnumItemTree extends BaseTree {
    name: string;
    value: any;
    expressionValue: ExpressionTree;

    constructor(public ctx: EnumItemContext) {
        super();
        this.name = ctx._name.text;
        this.expressionValue = ctx.expression() && getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            value: this.value,
            expressionValue: this.expressionValue.toPlain(),
        };
    }
}
