import { IfStatementContext } from '../../../grammar/.antlr/XonParser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementTree } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';

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
