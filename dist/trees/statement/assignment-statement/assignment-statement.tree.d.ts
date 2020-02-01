import { AssignmentStatementContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../../statement/statement.tree';
export declare class AssignmentStatementTree extends StatementTree {
    ctx: AssignmentStatementContext;
    name: string;
    value: ExpressionTree;
    constructor(ctx: AssignmentStatementContext);
    toPlain(): {
        type: string;
    };
}
