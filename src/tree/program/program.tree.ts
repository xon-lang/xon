import { ProgramContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { LineBreakStatementTree } from '../statement/line-break-statement/line-break-statement.tree';
import { getStatementTree } from '../statement/statement-helper';
import { StatementTree } from '../statement/statement.tree';

export class ProgramTree extends BaseTree {
    statements: StatementTree[];

    constructor(public ctx: ProgramContext) {
        super();
        this.statements = ctx
            .statement()
            ?.map(getStatementTree)
            .filter(x => !(x instanceof LineBreakStatementTree));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            statements: this.statements.map(x => x.toPlain()),
        };
    }
}
