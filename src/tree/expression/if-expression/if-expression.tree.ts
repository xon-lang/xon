import { BaseTypes } from '../../../base-types';
import { IfExpressionContext } from '../../../grammar/xon-parser';
import { getStatementsTree } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class IfExpressionTree extends ExpressionTree {
    items: {
        statements: StatementTree[];
        condition: ExpressionTree;
        hasIf: boolean;
        hasElse: boolean;
    }[] = [];

    constructor(public ctx: IfExpressionContext) {
        super();
        this.items = ctx.expression().map((x, i) => ({
            statements: getStatementsTree(ctx.body(i)),
            condition: getExpressionTree(x),
            hasIf: true,
            hasElse: !!i,
        }));
        if (ctx.Else()) {
            this.items.push({
                statements: getStatementsTree(ctx.body(ctx.body().length - 1)),
                condition: null,
                hasIf: false,
                hasElse: true,
            });
        }
    }

    getType() {
        return BaseTypes.Undefined;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            items: this.items.map((x) => ({
                statements: x.statements.map((z) => z.toPlain()),
                condition: x.condition.toPlain(),
                hasIf: x.hasIf,
                hasElse: x.hasElse,
            })),
        };
    }
}
