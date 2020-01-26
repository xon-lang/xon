import { AssignmentStatementContext, ExpressionStatementContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { StatementTree } from '../statement/statement.tree';

export class ExpressionStatementTree extends StatementTree {
    value: ExpressionTree;

    constructor(public ctx: ExpressionStatementContext) {
        super();
        this.value = getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value.toPlain()
        };
    }
}
