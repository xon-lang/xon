import { AssignmentStatementContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class AssignmentStatementTree extends BaseTree {
    name: string;
    value: ExpressionTree;

    constructor(public ctx: AssignmentStatementContext) {
        super();
        this.name = ctx.ID().text;
        this.value = getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
        };
    }
}
