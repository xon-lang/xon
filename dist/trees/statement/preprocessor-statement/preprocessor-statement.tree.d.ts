import { PreprocessorStatementContext } from '../../../grammar/.antlr/XonParser';
import { StatementTree } from '../statement.tree';
export declare class PreprocessorStatementTree extends StatementTree {
    ctx: PreprocessorStatementContext;
    constructor(ctx: PreprocessorStatementContext);
    toPlain(): {
        type: string;
    };
}
