import { IfStatementContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../../statement/statement.tree';
export declare class IfStatementTree extends StatementTree {
    ctx: IfStatementContext;
    condition: ExpressionTree;
    statements: StatementTree[];
    constructor(ctx: IfStatementContext);
    toPlain(): {
        condition: {
            type: string;
        };
        statements: {
            type: string;
        }[];
        type: string;
    };
}
