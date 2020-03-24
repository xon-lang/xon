import { SelectStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class SelectStatementTree extends StatementTree {
    value: ExpressionTree;
    items: {
        case: ExpressionTree;
        body: StatementTree;
    }[];

    constructor(public ctx: SelectStatementContext) {
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
