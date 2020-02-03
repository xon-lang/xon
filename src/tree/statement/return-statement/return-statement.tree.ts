import { ReturnStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class ReturnStatementTree extends StatementTree {
    value: ExpressionTree;

    constructor(public ctx: ReturnStatementContext) {
        super();
        this.value = ctx.expression() && getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain(),
        };
    }
}
