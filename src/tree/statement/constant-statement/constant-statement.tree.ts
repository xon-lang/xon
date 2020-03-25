import { ConstantStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class ConstantStatementTree extends StatementTree {
    name: string;
    value: ExpressionTree;

    constructor(public ctx: ConstantStatementContext) {
        super();
        this.name = ctx.ID().text;
        this.value = ctx.expression() && getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            value: this.value?.toPlain(),
        };
    }
}
