import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsTree } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends StatementTree {
    ifCondition: ExpressionTree;
    ifStatements: StatementTree[];
    elseCondition: ExpressionTree;
    elseStatements: StatementTree[];

    constructor(public ctx: IfStatementContext) {
        super();
        const [ifExpression, elseExpression] = ctx.expression();
        const [ifBody, elseBody] = ctx.body();

        this.ifCondition = getExpressionTree(ifExpression);
        this.ifStatements = getStatementsTree(ifBody.statement());
        this.elseCondition = elseExpression && getExpressionTree(elseExpression);
        this.elseStatements = elseBody && getStatementsTree(elseBody.statement());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            ifCondition: this.ifCondition.toPlain(),
            ifStatements: this.ifStatements.map(x => x.toPlain()),
            elseCondition: this.elseCondition?.toPlain(),
            elseStatements: this.elseStatements?.map(x => x.toPlain()),
        };
    }
}
