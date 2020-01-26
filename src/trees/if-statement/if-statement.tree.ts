import { AssignmentStatementContext, IfStatementContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { StatementTree } from '../statement/statement.tree';
import { getStatementTree } from '../statement/statement-helper';

export class IfStatementTree extends StatementTree {
    condition: ExpressionTree;
    statements: StatementTree[];

    constructor(public ctx: IfStatementContext) {
        super();
        this.condition = getExpressionTree(ctx.expression());
        this.statements = ctx.statement().map(getStatementTree);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            condition: this.condition.toPlain(),
            statements: this.statements.map(x=>x.toPlain())
        };
    }
}
