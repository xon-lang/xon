import { SelectStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsTree } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class SelectStatementTree extends StatementTree {
    value: ExpressionTree;
    cases: {
        value: ExpressionTree;
        statements: StatementTree[];
    }[];

    constructor(public ctx: SelectStatementContext) {
        super();
        this.value = getExpressionTree(ctx._value);
        this.cases = ctx._cases.map((x, i) => ({
            value: getExpressionTree(x),
            statements: getStatementsTree(ctx.body(i)),
        }));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value?.toPlain(),
            cases: this.cases.map((x) => ({
                value: x.value.toPlain(),
                statements: x.statements.map((x) => x.toPlain()),
            })),
        };
    }
}
