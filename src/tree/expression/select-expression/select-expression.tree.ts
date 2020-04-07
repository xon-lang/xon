import { SelectExpressionContext } from '../../../grammar/xon-parser';
import { getStatementTree } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class SelectExpressionTree extends StatementTree {
    value: ExpressionTree;
    cases: {
        value: ExpressionTree;
        body: StatementTree[];
    }[];

    constructor(public ctx: SelectExpressionContext) {
        super();
        this.value = getExpressionTree(ctx._value);
        this.cases = ctx._cases.map((x, i) => ({
            value: getExpressionTree(x),
            body: ctx.body(i).statement().map(getStatementTree),
        }));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value?.toPlain(),
            cases: this.cases.map((x) => ({
                value: x.value.toPlain(),
                body: x.body.map((x) => x.toPlain()),
            })),
        };
    }
}
