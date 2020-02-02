import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { StatementTree } from '../statement.tree';

export class PreprocessorStatementTree extends StatementTree {
    value: string;

    constructor(public ctx: PreprocessorStatementContext) {
        super();
        this.value = ctx.text.slice(2, -1);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
