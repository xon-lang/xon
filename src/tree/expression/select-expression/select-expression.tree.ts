import { SelectExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { StatementTree } from '../../statement/statement.tree';

export class SelectExpressionTree extends StatementTree {
    value: ExpressionTree;
    items: {
        case: ExpressionTree;
        body: StatementTree;
    }[];

    constructor(public ctx: SelectExpressionContext) {
        super();
        this.value = ctx._value && getExpressionTree(ctx._value);
        this.items = ctx._value && getExpressionTree(ctx._value);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
