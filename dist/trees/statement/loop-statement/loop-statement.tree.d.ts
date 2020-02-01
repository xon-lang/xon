import { LoopStatementContext } from '../../../grammar/.antlr/XonParser';
import { StatementTree } from '../../statement/statement.tree';
import { ExpressionTree } from '../../expression/expression.tree';
export declare class LoopStatementTree extends StatementTree {
    ctx: LoopStatementContext;
    infinity: boolean;
    indexName: string;
    keyName: string;
    valueName: string;
    expression: ExpressionTree;
    statements: StatementTree[];
    constructor(ctx: LoopStatementContext);
    toPlain(): {
        infinity: boolean;
        indexName: string;
        keyName: string;
        valueName: string;
        expression: {
            type: string;
        };
        statements: {
            type: string;
        }[];
        type: string;
    };
}
