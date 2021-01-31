import { FunctionStatementContext } from '../../../grammar/xon-parser';
import { FunctionTree } from '../../function/function.tree';
import { StatementTree } from '../statement.tree';

export class FunctionStatementTree extends StatementTree {
    value: FunctionTree;

    constructor(public ctx: FunctionStatementContext) {
        super();
        this.value = new FunctionTree(ctx.function());
    }
}
