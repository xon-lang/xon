import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class AssignmentStatementTree extends StatementTree {
    name: string;
    value: ExpressionTree;

    constructor(public ctx: AssignmentStatementContext) {
        super();
        this.name = ctx.ID().text;
        this.value = getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            value: this.value.toPlain(),
        };
    }
}
