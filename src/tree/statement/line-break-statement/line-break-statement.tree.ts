import { LineBreakStatementContext } from '../../../grammar/xon-parser';
import { StatementTree } from '../statement.tree';

export class LineBreakStatementTree extends StatementTree {
    constructor(public ctx: LineBreakStatementContext) {
        super();
    }
}
