import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { StatementTree } from '../statement.tree';

export class PreprocessorStatementTree extends StatementTree {
    constructor(public ctx: PreprocessorStatementContext) {
        super();
    }

    toPlain() {
        return {
            ...super.toPlain(),
        };
    }
}
