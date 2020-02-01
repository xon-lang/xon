import { ExpressionStatementContext } from '../../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../../statement/statement.tree';
export declare class ExpressionStatementTree extends StatementTree {
    ctx: ExpressionStatementContext;
    value: ExpressionTree;
    constructor(ctx: ExpressionStatementContext);
    toPlain(): {
        value: {
            type: string;
        };
        type: string;
    };
}
