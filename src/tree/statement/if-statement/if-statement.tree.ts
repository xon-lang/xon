import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementTree } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends StatementTree {
    ifCondition: ExpressionTree;
    ifStatements: StatementTree[];
    elseCondition: ExpressionTree;
    elseStatements: StatementTree[];

    constructor(public ctx: IfStatementContext) {
        super();
        this.ifCondition = getExpressionTree(ctx._ifCondition);
        this.ifStatements = ctx._ifStatements.map(getStatementTree);
        this.elseCondition = getExpressionTree(ctx._elseCondition);
        this.elseStatements = ctx._elseStatements.map(getStatementTree);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            ifCondition: this.ifCondition.toPlain(),
            ifStatements: this.ifStatements.map(x => x.toPlain()),
            elseCondition: this.elseCondition.toPlain(),
            elseStatements: this.elseStatements.map(x => x.toPlain()),
        };
    }
}
