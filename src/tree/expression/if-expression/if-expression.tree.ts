import { IfExpressionContext } from '../../../grammar/xon-parser';
import { getStatementsTree } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { BaseTypes } from '../../../base-types';

export class IfExpressionTree extends ExpressionTree {
    ifCondition: ExpressionTree;
    ifStatements: StatementTree[];
    elseCondition: ExpressionTree;
    elseStatements: StatementTree[];

    constructor(public ctx: IfExpressionContext) {
        super();
        const [ifExpression, elseExpression] = ctx.expression();
        const [ifBody, elseBody] = ctx.body();

        this.ifCondition = getExpressionTree(ifExpression);
        this.ifStatements = getStatementsTree(ifBody);
        this.elseCondition = elseExpression && getExpressionTree(elseExpression);
        this.elseStatements = elseBody && getStatementsTree(elseBody);
    }

    getType(){
        return BaseTypes.Undefined
    }

    toPlain() {
        return {
            ...super.toPlain(),
            ifCondition: this.ifCondition.toPlain(),
            ifStatements: this.ifStatements.map((x) => x.toPlain()),
            elseCondition: this.elseCondition?.toPlain(),
            elseStatements: this.elseStatements?.map((x) => x.toPlain()),
        };
    }
}
