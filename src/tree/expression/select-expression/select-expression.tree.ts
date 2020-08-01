import { BaseTypes } from '../../../base-types';
import { SelectExpressionContext } from '../../../grammar/xon-parser';
import { getStatementsTree } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class SelectExpressionTree extends ExpressionTree {
    value: ExpressionTree;
    cases: {
        value: ExpressionTree;
        statements: StatementTree[];
    }[];

    constructor(public ctx: SelectExpressionContext) {
        super();
        this.value = getExpressionTree(ctx._value);
        this.cases = ctx._cases.map((x, i) => ({
            value: getExpressionTree(x),
            statements: getStatementsTree(ctx.body(i)),
        }));
    }

    getType() {
        return BaseTypes.Any;
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
