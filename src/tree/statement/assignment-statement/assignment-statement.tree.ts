import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class AssignmentStatementTree extends StatementTree {
    isDeclaration: boolean;
    name: string;
    value: ExpressionTree;

    constructor(public ctx: AssignmentStatementContext) {
        super();
        this.isDeclaration = !!ctx.Var();
        this.name = ctx.ID().text;
        this.value = getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            isDeclaration: this.isDeclaration,
            name: this.name,
            value: this.value.toPlain(),
        };
    }
}
